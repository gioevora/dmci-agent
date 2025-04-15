"use client";

import React, { useState, useEffect } from "react";
import PropertyFilter from "../../components/property/filter";
import { getAuthHeaders } from "../auth";
import RecommendedCard from "@/components/modal/recomendedproperty";
import PropertySkeleton from "@/components/skeleton/propertyskeleton";
import { Input, Select, SelectItem, Spinner } from "@heroui/react";
import FilterPropertyModal from "@/components/modal/fileterproperty";
import ComparePreview from "@/components/comparepreview";
import { LuSearch } from "react-icons/lu";


interface Property {
  id: string;
  property_location: string;
  status: string;
  property_price: number;
  property_type: string;
  images: string;
  property_description: string;
  property_size: string;
  property_level: string;
  property: {
    name: string;
    location:string;
  }

}

const priceRanges = [
  { key: "All", value: "All" },
  { key: "1M - 2M", value: "1000000-2000000" },
  { key: "2M - 3M", value: "2000000-3000000" },
  { key: "3M - 4M", value: "3000000-4000000" },
  { key: "4M - 5M", value: "4000000-5000000" },
  { key: "5M - 6M", value: "5000000-6000000" },
  { key: "6M - 7M", value: "6000000-7000000" },
  { key: "7M - 8M", value: "7000000-8000000" },
  { key: "8M - 9M", value: "8000000-9000000" },
  { key: "9M - 10M", value: "9000000-10000000" },
  { key: "10M+", value: "10000000-100000000" },
];


async function fetchProperties()  {
  const apiUrl = "https://infinitech-testing5.online";
  const endpoint = `${apiUrl}/api/user/property`;

  try {
    const headers = getAuthHeaders();
    const res = await fetch(endpoint, {
      method: "GET",
      headers,
      cache: "no-cache",
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch properties: ${res.status} - ${res.statusText}`,
      );
      return [];
    }
    const data = await res.json();
    return data.records;
  } catch (error) {
    console.error("An error occurred while fetching properties:", error);
    return [];
  }
}

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  useEffect(() => {
    async function loadProperties() {
      const data = await fetchProperties();
      setProperties(data);
      setFilteredProperties(data);
      setLoading(false);
    }

    loadProperties();
  }, []);

  useEffect(() => {
    let filtered = properties.filter((property) =>
      property.property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.property_type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedPriceRange && selectedPriceRange !== "All") {
      const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
      filtered = filtered.filter(
        (property) =>
          property.property_price >= minPrice && property.property_price <= maxPrice
      );
    }

    if (selectedPriceRange === "All") {
      filtered = properties; // Reset to all properties
    }


    setFilteredProperties(filtered);
  }, [searchTerm, selectedPriceRange, properties]);

  return (

    <div className="flex-grow px-4 xl:px-24">
      {loading ? (
        <div className="flex justify-center py-12 h-96">
          <Spinner size="lg" label="Loading Properties..." />
        </div>
      ) : (
        <>
          <div className="sticky top-20 z-20">
            <ComparePreview />
          </div>
          <div className="flex items-center justify-end gap-2 py-8 w-full min-w-screen">
            <Input
              startContent={<LuSearch />}
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 rounded-md py-2"
            />
            <Select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="w-full max-w-32 rounded-md py-2"
              defaultSelectedKeys={['All']}
            >
              {priceRanges.map((range) => (
                <SelectItem
                  key={range.value}
                  value={range.value}
                >
                  {range.key}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <RecommendedCard data={filteredProperties} />
          </div>
        </>
      )}
    </div>

  );
};

export default HomePage;
