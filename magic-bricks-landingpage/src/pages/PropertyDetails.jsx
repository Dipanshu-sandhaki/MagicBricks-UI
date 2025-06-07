import React from "react"
import { useParams } from "react-router-dom"

const PropertyDetails = () => {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Property Details</h2>
      <p>Details for property ID: {id}</p>
    </div>
  )
}

export default PropertyDetails
