'use client'
import EmptyData from "@/components/fallback/emptydata";
import { formatArea } from "@/utils/priceformat";
import { Card, CardBody, Image } from "@heroui/react";
import React from "react";
import { LuBadgeCheck, LuBrush, LuConstruction, LuLandPlot, LuRuler, LuScissors } from "react-icons/lu";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface Property {
    area?: number;
    property_plan_cut?: string;
    development_type?: string;
    theme?: string;
    image?: string;
}

interface MasterPlanSectionProps {
    data?: Property;
}

const BuildingPlanSection: React.FC<MasterPlanSectionProps> = ({ data }) => {
    const cardData = [
        {
            icons: <LuRuler className="text-xl text-green-800" />,
            title: "Property Area",
            data: formatArea(data?.area),
        },

        {
            icons: <LuConstruction className="text-xl text-green-800" />,
            title: "Development Type",
            data: data?.development_type,
        },

        {
            icons: <LuBrush className="text-xl text-green-800" />,
            title: "Theme",
            data: data?.theme,
        },
    ];

    return (
        <section className="w-full flex flex-col justify-center py-8 mt-0">
            <div className="flex flex-col gap-4 items-center">
                <div className="w-full">
                    <h1 className="font-bold text-2xl uppercase">Building Plan</h1>
                    <p className="text-sm text-default-500 max-w-2xl">
                        Discover the full layout of our development — including the type of build, available unit cuts, and current status — thoughtfully designed to align with your needs and lifestyle.
                    </p>

                    {data ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {cardData.map((item, index) => (
                                <Card key={index} className="shadow-none border">
                                    <CardBody className="px-6">
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <div className="bg-green-200 rounded-full p-2">
                                                {item.icons}
                                            </div>
                                            <div>
                                                <span className="text-sm text-default-500">{item.title}</span>
                                                <div className="flex h-5 items-center space-x-4 text-md font-medium">
                                                    {item.data || "Unit Area Not Found"}
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    ) : null}
                </div>

                <div className="w-full flex justify-center items-center rounded-lg ">
                    <PhotoProvider>
                        {data?.image ? (
                            <div className="py-4 px-4">
                                <PhotoView src={`https://dmci-agent-bakit.s3.amazonaws.com/properties/plans/${data.image}`}>
                                    <Image
                                        alt="Master Plan Image"
                                        className="rounded-lg  w-full"
                                        src={data.image
                                            ? `https://dmci-agent-bakit.s3.amazonaws.com/properties/plans/${data.image}`
                                            : "https://via.placeholder.com/600x400?text=No+Image+Available"}
                                    />
                                </PhotoView>
                            </div>

                        ) : (
                            <div className="flex justify-center items-center h-[450px]">
                                <EmptyData fallbackname="Master Plan Image" />
                            </div>

                        )}
                    </PhotoProvider>

                </div>
            </div>
        </section>
    );
};

export default BuildingPlanSection;
