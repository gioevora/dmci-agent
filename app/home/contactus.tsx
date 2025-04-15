'use client'
import React, { useEffect, useState } from "react";
import CompanyInfo from "@/components/companycontactinfo";
import ContactForm from "@/components/contactform";
import { getAuthHeaders } from "../auth";


async function fetchProperties() {
  
  const apiUrl = "https://infinitech-testing5.online";
  const endpoint = `${apiUrl}/api/user/properties`;

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



const ContactUs = () => {
  const [properties, setProperties] = useState<[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProperties();
      setProperties(data);
    };

    fetchData();
  }, []);


  return (
    <section className="py-6 md:py-8">
      <div className="grid grid-cols-1 text-start lg:grid-cols-4 pt-8 gap-4 items-center">
        <div className="col-span-3 md:col-span-2">
          <div className="mb-8">
            <h1 className="font-bold text-2xl uppercase">Contact Us</h1>
            <p className="text-sm text-default-500">
              Leave us a message and we will get back to you as soon as
              possible.
            </p>
          </div>
          <div>
            <ContactForm data={properties} />
          </div>

        </div>

        <div className="col-span-3 px-0 md:col-span-2 md:px-8">
          <CompanyInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
