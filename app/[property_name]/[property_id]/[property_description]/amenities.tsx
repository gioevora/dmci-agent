'use client'

import React from 'react'
import { Chip } from '@heroui/react'
import { getAmenity } from '@/utils/icons'


interface AmenitiesProps {
  data: { property_amenities: string | string[] }
}

const UnitAmenities: React.FC<AmenitiesProps> = ({ data }) => {
  // Ensure amenities is an array of strings
  const amenities: string[] = Array.isArray(data.property_amenities)
    ? data.property_amenities
    : JSON.parse(data.property_amenities as string)

  return (
    <section className="w-full flex flex-col justify-center py-8 mt-12">
      <h1 className="font-bold text-2xl uppercase">Amenities</h1>
      <p className="text-sm text-default-500 max-w-2xl">
        Explore the range of premium amenities offered in our development, designed to elevate your living experience with modern comforts and convenience.
      </p>
      <div className="py-4 flex flex-wrap gap-2 mt-4">
        {amenities.map((item, index) => {
          const amenity = getAmenity(item)
          const Icon = amenity?.icon

          return (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-gray-200 p-2 rounded-lg dark:bg-gray-900"
            >
              {Icon && <Icon className="h-5 w-5 text-blue-500" />}
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UnitAmenities
