import React from "react";

const VisionMission = () => {
  return (
    <section className="flex flex-col gap-4 py-4 md:py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-8 gap-8">
        <div className="text-start">
          <h1 className="font-bold text-3xl">Vision & Mission</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            We shall be the best provider of residential communities designed to
            create quality lifestyle responsive to the changing needs and
            preferences of the market we serve.
          </p>
          <h2 className="mb-2 text-lg font-semibold mt-4 text-gray-900 dark:text-white">
            In so doing, we are committed:
          </h2>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>To ensure customer satisfaction.</li>
            <li>
              To achieve a sustainable growth on our shareholders investment.
            </li>
            <li>
              To maintain a mutually beneficial relationship with our partners
              in the business.
            </li>
            <li>To care for the environment we work in.</li>
            <li>To promote the growth of our people.</li>
            <li>
              While building an organization that espouses Integrity, Excellence
              and Interdependence.
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h1 className="font-bold text-3xl">The DMCI Creed</h1>
          <h2 className="mb-2 text-lg font-semibold mt-4 text-gray-900 dark:text-white">
            We believe:
          </h2>
          <ul className="space-y-1 text-gray-500 dark:text-gray-400">
            <li>
              That construction is a noble profession whose activities are vital
              to economic development and national progress,
            </li>
            <li className="mb-4">
              That fair competition is essential to the growth and stability of
              the construction industry,
            </li>
            <li className="mb-4">
              That a contractor&apos;s primary responsibility to his client is
              to give his best in faithful compliance with their agreement;
            </li>
            <li className="mb-4">
              That labor and capital should cooperate with one another so that
              labor may live with dignity and capital may find its just rewards;
            </li>
            <li className="mb-4">
              That the ill-gotten violates business ethics and the ill-conceived
              wreaks havoc on the public good;
            </li>
            <li className="mb-4">
              That the ultimate objectives are to serve not only man but
              humankind; and to build not only an enterprise but an institution
              that will serve society.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
