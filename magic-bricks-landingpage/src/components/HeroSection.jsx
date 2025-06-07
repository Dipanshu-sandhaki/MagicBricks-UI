import React, { useState, useRef, useEffect } from "react"
import AdBanner from "./AdBanner"
import { MapPin, Home, IndianRupee, Search } from "lucide-react"

const HeroSection = () => {
  const tabs = [
    "Buy",
    "Rent",
    "New Projects",
    "PG",
    "Plot",
    "Commercial",
    "Post Free Property Ad",
  ]

  const [activeIndex, setActiveIndex] = useState(0) // Buy active by default
  const [hoverIndex, setHoverIndex] = useState(null)
  const containerRef = useRef(null)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  // Update underline position when activeIndex or hoverIndex changes
  useEffect(() => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex
    const container = containerRef.current
    if (!container) return

    const button = container.children[index]
    if (!button) return

    const left = button.offsetLeft
    const width = button.offsetWidth

    setUnderlineStyle({ left, width })
  }, [activeIndex, hoverIndex])

  return (
    <section className="bg-white pt-20 px-4 md:px-12">
      {/* Wrapper: Left (Text+Tabs) + Right (AdBanner) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
        {/* Left Section: Centered vertically with search box */}
        <div className="flex flex-col justify-center w-full lg:w-[60%]">
          <div className="flex flex-col items-center lg:items-start justify-center h-full">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-left mb-3 ml-[260px]">
              Find a home you’ll{" "}
              <span className="italic font-bold text-black">love</span>
            </h2>

            {/* Tabs */}
            <div
              ref={containerRef}
              className="relative flex flex-wrap gap-4 text-sm font-medium mb-6 ml-[150px]"
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`relative px-2 py-1 ${
                    i === activeIndex
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {tab}
                </button>
              ))}

              {/* Underline bar */}
              <span
                className="absolute bottom-0 h-0.5 bg-red-600 transition-all duration-300"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
              />
            </div>

            {/* Search Box */}
            <div className="bg-white shadow-lg rounded-full px-6 py-4 flex items-center flex-wrap gap-4 w-full border border-black">
              {/* Location */}
              <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
                <MapPin size={18} className="text-red-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">
                  Bangalore
                </span>
              </div>
              <input
                type="text"
                placeholder="Add more..."
                className="text-sm outline-none w-32 sm:w-48"
              />

              {/* Flat Type */}
              <div className="border-l pl-4 flex items-center gap-2">
                <Home size={16} className="text-red-600" />
                <select className="text-sm outline-none font-medium text-gray-800 bg-transparent">
                  <option>Flat +1</option>
                </select>
              </div>

              {/* Budget */}
              <div className="border-l pl-4 flex items-center gap-2">
                <IndianRupee size={16} className="text-red-600" />
                <select className="text-sm outline-none font-medium text-gray-800 bg-transparent">
                  <option>Budget</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="ml-auto bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold">
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Ad Banner */}
        <div className="w-full sm:w-72 lg:w-80 flex justify-center lg:justify-end -mt-8">
          <AdBanner />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
