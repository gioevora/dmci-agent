import { Card, CardBody, Pagination } from "@heroui/react";
import React, { useState } from "react";

interface Testimonial {
  name: string;
  message: string;
}

interface AgentTestimonialProps {
  testimonials: Testimonial[];
  itemsPerPage?: number;
}

const AgentTestimonial: React.FC<AgentTestimonialProps> = ({
  testimonials,
  itemsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {currentTestimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-none border">
            <CardBody>
              <p className="text-sm text-default-500 italic">
                &quot;{testimonial.message}&quot;
              </p>
              <h1 className="font-bold text-lg mt-4 text-default-600">
                {testimonial.name}
              </h1>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="py-4 flex justify-center">
        <Pagination
          total={totalPages}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default AgentTestimonial;
