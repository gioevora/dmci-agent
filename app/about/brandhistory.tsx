"use client";
import React from "react";
import { Image } from "@heroui/react";

const BrandHistory = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 md:py-8 items-center ">
      <div className="text-start min-w-md">
        <h1 className="font-bold text-3xl">Our Brand History</h1>
        <h2 className="font-medium text-lg mt-4">
          The Heroes of the Underserved: the DMCI Homes Brand Story
        </h2>
        <p className="text-default-500">Inspired by Alfonso</p>
        <div className="flex">
          <div className="text-start flex flex-col gap-4">
            <p>
              With a wife and a baby on the way, the cost of living in the city
              became prohibitive for Alfonso. Far beyond the city boundaries,
              other builders began to develop sprawling neighborhoods of
              cookie-cutter houses on doily-sized lots. They&apos;re pretty but
              too cramped (for a growing family) and too far out of the city
              center.
            </p>
            <p>
              The middle-class man became a stressed out man-in-the-middle,
              faced with no choice but to take the long daily commute--or pay
              big city prices. There was no middle ground. &quot;Pagod ka na
              papunta sa trabaho, pagod ka pa pag-uwi...&quot;
            </p>
            <p>
              &quot;Alfonso deserves better,&quot; the Builder remarked.
              &quot;He deserves a real home, accessible to his work... a cocoon
              of good living.&quot;
            </p>
          </div>
        </div>
      </div>

      <Image
        isZoomed
        alt="Relaxing app background"
        className="object-cover object-right shadow-lg"
        height={500}
        src="https://www.dmcihomes.com/frontend/images/about/brand-story.png"
      />
    </section>
  );
};

export default BrandHistory;
