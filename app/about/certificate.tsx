import React from "react";

import CertificateCard from "./card/certificatecard";

const Certificates = () => {
  return (
    <section className="flex flex-col gap-4 py-6 md:py-8">
      <div className="text-start">
        <h1 className="font-bold text-3xl">Certificates and Awards</h1>
        <p>
          Excellent quality has always been one of our strengths and it is
          recognized by various organizations inside and outside of the
          Philippines.
        </p>
      </div>
      <CertificateCard />
    </section>
  );
};

export default Certificates;
