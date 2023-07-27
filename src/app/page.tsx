"use client"
import React, { useState } from "react";
import Component1 from './test_component'

export default function Home() {
  const [opacity, setOpacity] = useState(1);

  const handleIncreaseOpacity = () => {
    if (opacity < 1) {
      setOpacity(opacity + 0.1);
    }
  };

  const handleDecreaseOpacity = () => {
    if (opacity > 0) {
      setOpacity(opacity - 0.1);
    }
  };
  return (
    <div>
      <div className=" flex flex-col justify-center items-center p-12">
        <div className="border px-4 py-2 rounded-full">
          <button onClick={handleIncreaseOpacity} className="py-4 hover:animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          {/* Opacity */}
          <p className="text-sm font-light">{opacity.toFixed(1)}</p>
          <button onClick={handleDecreaseOpacity} className="py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div style={{ opacity }}>
        {/* You can add some layout component here */}
        <Component1/>
      </div>
    </div>
  )
}
