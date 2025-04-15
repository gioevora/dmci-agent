import React from "react";

import PartmetImage from "./partnerimage";

const Partners = () => {
  return (
    <section className="flex flex-col gap-4 py-6 md:py-8">
      <div className="text-start">
        <h1 className="font-bold text-3xl">Our Partners</h1>
        <p>
          DMCI Homes fosters partnerships with only the best companies to ensure
          the excellent quality of properties we provide.
        </p>
      </div>
      <PartmetImage />
    </section>
  );
};

export default Partners;
