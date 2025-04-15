import { capitalizeWords } from "@/utils/formatMetadata";

// Define the type for the expected params
type paramsTypes = Promise<{
    property_name: string;
    property_id: string;
    property_description: string;
}>;

// Function to generate metadata for property pages
export async function generateMetadata({ params }: { params: paramsTypes }) {
    const { property_name, property_description, property_id } = await params;
    const formattedName = capitalizeWords(property_name);

    return {
        title: formattedName,
        description: property_description || "Default description",
        openGraph: {
            title: `${formattedName} | ABIC Realty and Consultancy Corporation`,
            description: property_description || "Default description",
            url: `https://www.abic-website.vercel.app/property/${property_id}`,
            siteName: "ABIC Realty",
            images: [
                {
                    url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-loan-calculator-banner.png",
                    width: 1200,
                    height: 630,
                    alt: "ABIC Realty Property",
                },
            ],
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            site: "@AbicRealty",
            creator: "@AbicRealty",
            title: `Property: ${formattedName} | ABIC Realty`,
            description: property_description || "Default description",
            images: [
                "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-loan-calculator-banner.png",
            ],
        },
        other: {
            "og:image:width": "1200",
            "og:image:height": "630",
        },
    };
}
