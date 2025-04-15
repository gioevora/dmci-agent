"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import { Button, Image, Spinner } from "@heroui/react";
import FilterPropertyModal from "@/components/modal/fileterproperty";
import { getAuthHeaders } from "../auth";
import { MdArrowOutward } from "react-icons/md";
import { toSlug } from "@/utils/slug";
import { breeSerif, raleway } from "@/utils/font";

const HeroSection = () => {
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProperty = async () => {
      const headers = getAuthHeaders();

      try {
        const response = await fetch(
          "https://infinitech-testing5.online/api/user/featured-property",
          {
            method: "GET",
            headers: headers,
          }
        );
        const data = await response.json();
        setProperty(data.record);
      } catch (error) {
        console.error("Error fetching featured property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);

  if (loading) {
    return (
      <section className="flex items-center justify-center w-full min-h-screen bg-gray-100 py-12">
        <Spinner size="lg" color="primary" label="Loading Section..." />
      </section>
    );
  }

  if (!property) {
    return (
      <section className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <p>Failed to load featured property.</p>
      </section>
    );
  }

  let backgroundImage = "";

  try {
    const images: string[] = JSON.parse(property.images);
    if (Array.isArray(images) && images.length > 0) {
      backgroundImage = `https://dmci-agent-bakit.s3.amazonaws.com/properties/images/${images[0]}`;
    }
  } catch (error) {
    console.error("Error parsing images:", error);
  }

  return (
    <section className="relative w-full h-auto bg-cover object-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/hero-banner.png')` }}>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 z-20 pointer-events-none"></div> */}
      <div className="absolute py-12 w-full opacity-20 z-20 bg-contain bg-center xl:bg-left bg-no-repeat inset-0 xl:left-24 top-12">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image src="/dmci-logo-hero.png" alt="DMCI Logo" height={350} />
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] font-bold underline">
            DMCI HOMES
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col text-white px-4 xl:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="relative py-24 w-full h-auto bg-contain bg-left bg-no-repeat">

            <div className="flex flex-col w-full text-center xl:text-start xl:max-w-3xl z-40">
              <h1>
                <span className={`text-5xl sm:text-7xl font-bold capitalize  ${raleway.className} `}>
                  {property?.property.slogan || ""}&nbsp;
                </span>
              </h1>
              <p className="mt-4 text-gray-200 text-lg xl:text-xl">{property?.property_description}</p>
            </div>

            <div className="flex gap-3 mt-8 z-50 justify-center xl:justify-start">
              <Button
                size="lg"
                endContent={<MdArrowOutward />}
                isLoading={buttonLoading}
                color="primary"
                variant="solid"
                onPress={() => {
                  setButtonLoading(true);
                  router.push(
                    `${toSlug(property.property.name)}/${toSlug(property.id)}/${toSlug(
                      property.property_description || ""
                    )}`
                  );
                }}
              >
                Visit {property?.property.name || "Property"}
              </Button>
            </div>

            <div className="flex xl:hidden w-full justify-center z-50 py-4">
              <FilterPropertyModal />
            </div>
          </div>

          <div className="hidden xl:flex justify-center">
            <Image
              src="/ella-profile.png"
              width={600}
              height={700}
              className="object-cover object-top"
              alt="Ella Profile Desktop"
            />
          </div>

          {/* Mobile Version */}
          <div className="flex xl:hidden justify-center -mt-20">
            <Image
              src="/ella-profile.png"
              width={300}
              height={400}
              className="object-cover object-top"
              alt="Ella Profile Mobile"
            />
          </div>

        </div>
      </div>

      {/* Filter Property Modal at the Bottom with Full Width */}
      <div className="hidden absolute xl:bottom-0 left-0 w-full mb-4 px-4 xl:px-24 xl:flex justify-center z-20">
        <FilterPropertyModal />
      </div>
    </section>
  );
};

export default HeroSection;
