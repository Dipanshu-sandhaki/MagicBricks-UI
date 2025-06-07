import React from "react"
const categories = [
  {
    title: "Owner Properties",
    count: "55204",
    img: "/src/assets/owner-properties.jpg",
  },
  {
    title: "Projects",
    count: "999",
    img: "/src/assets/projects.jpg",
  },
  {
    title: "Ready to move-in",
    count: "48293",
    img: "/src/assets/readyTomove.jpeg",
  },
  {
    title: "Budget Homes",
    count: "1528",
    img: "/src/assets/budgetHomes.jpg",
  },
]

const PropertyCategory = () => {
  return (
    <section className="p-6">
      <h3 className="text-3xl font-bold mb-4">We've got properties for everyone</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="rounded overflow-hidden shadow hover:shadow-lg transition">
            <img src={cat.img} alt={cat.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">{cat.count}</h4>
              <p>{cat.title}</p>
              <button className="text-red-500 mt-2 font-medium">Explore →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PropertyCategory
