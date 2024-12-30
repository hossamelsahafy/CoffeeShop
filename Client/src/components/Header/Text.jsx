import React, { useState, useEffect } from "react";

const Text = () => {
  const coffeeItems = [
    "Espresso",
    "Cappuccino",
    "Latte",
    "Americano",
    "Macchiato",
    "Mocha",
    "Flat White",
    "Irish Coffee",
    "Cortado",
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  // Determine visible items based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(5); // xl screens
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3); // md screens
      } else {
        setVisibleCount(2); // smaller screens
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  // Get the items to display for the current view
  const currentItems = coffeeItems.slice(startIndex, startIndex + visibleCount);

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount < coffeeItems.length ? prev + 1 : prev
    );
  };

  return (
    <div className="relative h-full w-full">
      {/* Shadow Effect on the Left */}
      <div className="hidden lg:block fixed top-0 left-0 h-[80vh] w-[300px] bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10">
        {/* Rotated Number */}
        <p
          className="absolute font-bold text-[20px] text-white"
          style={{
            top: "27%",
            left: "23px",
            transform: "translateY(-50%) rotate(-90deg)",
          }}
        >
          02/03
        </p>

        {/* Vertical Line */}
        <div
          className="absolute bg-white"
          style={{
            width: "1px",
            height: "250px",
            top: "50%",
            left: "50px",
            transform: "translateY(-50%)",
          }}
        ></div>

        {/* Rotated Text */}
        <p
          className="absolute font-bold text-[20px] text-white rotate-[-90deg]"
          style={{
            bottom: "150px",
            left: "-7px",
          }}
        >
          CoffeeShop
        </p>
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center text-center text-white px-4">
        <h1 className="text-2xl lg:text-2xl font-extrabold mb-8 mt-[250px]">
          CoffeeShop
        </h1>
        <h1 className="text-4xl lg:text-6xl font-semibold mb-6">
          Choose the origin of
          <br /> the coffee
        </h1>
        <p className="text-lg lg:text-[16px] leading-relaxed max-w-3xl">
          Coffee that fuels your dreams. Life is short, stay awake for it.
          Coffee,
          <br />
          Art, and Vintage. Fuel for your creativity.
        </p>
        <p className="text-white text-[20px] font-bold hover:text-[#a7897b] mt-6 relative cursor-pointer transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#a7897b] after:transition-all after:duration-300 hover:after:w-full">
          Show Product
        </p>
      </div>

      {/* Bottom Pagination */}
      <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
        <div className="relative flex items-center justify-around lg:justify-center  xl:justify-center">
          {/* Left-Aligned Text */}
          <div className="text-center px-4">
            <p className="font-bold text-white text-sm sm:text-base lg:text-xl text-left">
              CoffeeShop
            </p>
            <p className="font-bold text-[#a7897b] text-[1rem] sm:text-[1.25rem] lg:text-[2.0625rem]">
              Fresh roasted coffee
            </p>
            <span className="text-[#a7897b] text-[1rem] sm:text-[1.25rem] lg:text-[2.0625rem]">
              with 24h delivery
            </span>
          </div>

          {/* Coffee Items and Pagination */}
          <div className="text-center mr-5 lg:ml-2">
            <p className="font-bold text-white text-sm sm:text-base mb-2 lg:text-xl text-left">
              PARTNERS
            </p>
            <div className="relative flex lg:justify-center lg:items-center gap-4 px-4 group">
              {/* Coffee Items */}
              <div className="flex items-center gap-4 ml-5">
                {currentItems.map((item, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-bold text-lg text-[#a7897b]">{item}</h3>
                  </div>
                ))}
              </div>

              {/* Pagination Buttons */}
              <button
                className={`absolute left-[-.5rem] text-white bg-[#a7897b] text-xs sm:text-[10px] lg:text-sm lg:mr-4 px-2 sm:px-1 lg:px-2 py-1 sm:py-0.5 lg:py-1 rounded-md border border-white shadow-md transition duration-300 opacity-100 ${
                  startIndex === 0 ? "opacity-0" : ""
                }`}
                onClick={handlePrevious}
                disabled={startIndex === 0}
              >
                &lt;&lt;
              </button>
              <button
                className={`absolute right-[-1.5rem] text-white bg-[#a7897b] text-xs sm:text-[10px] lg:text-sm lg:ml-12 px-2 sm:px-1 lg:px-2 py-1 sm:py-0.5 lg:py-1 rounded-md border border-white shadow-md transition duration-300 opacity-0 opacity-100 ${
                  startIndex + visibleCount >= coffeeItems.length
                    ? "opacity-0"
                    : ""
                }`}
                onClick={handleNext}
                disabled={startIndex + visibleCount >= coffeeItems.length}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
