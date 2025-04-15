import React from "react";

import AffiliatesImage from "./affiliatesimage";

const Affiliates = () => {
  return (
    <section className="flex flex-col gap-4 py-6 md:py-8">
      <div className="text-start">
        <h1 className="font-bold text-3xl">Our Affiliates</h1>
        <h2>
          DMCI Holdings Inc. along with its subsidiaries has conquered the test
          of time and are always dedicated in providing only the best to the
          communities it serves.
        </h2>
      </div>
      <AffiliatesImage />
    </section>
  );
};

export default Affiliates;
