"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShowValueWithArrow from "../components/ShowValueWithArrow";
import axios from "axios";
import newsData from "./newsData.json";
import Modal from "@/components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  // State to store API responses
  const [apiData, setApiData] = useState([
    {
      created_at: "2014-07-08T12:49:41.346-07:00",
      description:
        "Carbon dioxide levels in the air are at their highest in 650,000 years",
      display_in_dashboard: 1,
      giv_description: "",
      id: 1,
      publish_date: "2024-01-17T00:00:00.000-08:00",
      rate_is_increasing: 1,
      status: 1,
      title: "Carbon Dioxide",
      unit_abbr: "ppm",
      units: "parts per million",
      updated_at: "2024-01-17T14:18:36.565-08:00",
      value: "422",
    },

    {
      created_at: "2014-07-08T14:07:46.415-07:00",
      description: "Nineteen of the warmest years have occurred since 2000",
      display_in_dashboard: 1,
      giv_description: "",
      id: 2,
      publish_date: "2014-09-24T00:00:00.000-07:00",
      rate_is_increasing: 1,
      status: 1,
      title: "Global Temp",
      unit_abbr: "deg C",
      units: "°C since preindustrial",
      updated_at: "2023-01-18T15:21:43.281-08:00",
      value: "1.10",
    },
    {
      created_at: "2023-05-25T12:36:39.020-07:00",
      description: "",
      display_in_dashboard: 1,
      giv_description: "",
      id: 14,
      publish_date: "2023-05-25T00:00:00.000-07:00",
      rate_is_increasing: 1,
      status: 1,
      title: "Methane",
      unit_abbr: "ppb",
      units: "parts per billion",
      updated_at: "2023-05-25T12:36:39.020-07:00",
      value: "1923.6",
    },
    {
      created_at: "2014-07-08T14:09:29.258-07:00",
      description:
        "Satellite data show that Earth's polar ice sheets are losing mass",
      display_in_dashboard: 1,
      giv_description: "",
      id: 4,
      publish_date: "2014-10-07T00:00:00.000-07:00",
      rate_is_increasing: 0,
      status: 1,
      title: "Ice Sheets",
      unit_abbr: "Gt/yr",
      units: "billion metric tons per year",
      updated_at: "2023-04-10T13:29:37.810-07:00",
      value: "-424.0",
    },
  ]);

  // Fetch data from APIs
  useEffect(() => {
    // Define API endpoints
    const apiEndpoints = [
      "https://climate.nasa.gov/api/v1/vital_signs/1/",
      "https://climate.nasa.gov/api/v1/vital_signs/2/",
      "https://climate.nasa.gov/api/v1/vital_signs/14/",
      "https://climate.nasa.gov/api/v1/vital_signs/3/",
    ];

    // Fetch data from each API
    // Fetch data from each API using Axios
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          apiEndpoints.map((endpoint) => axios.get(endpoint))
        );
        const data = responses.map((response) => response.data);
        console.log(data);
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // 640px is the default breakpoint for 'sm' in Tailwind CSS
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-5">
      <div className="relative w-full h-auto mt-20  ">
        {/* Image */}
        <div className="relative md:m-7 grid place-items-center">
          <div className="relative">
            <img
              src="/earth-picture.jpg"
              alt="Earth"
              className="rounded-3xl lg:h-[35rem] lg:w-[100rem] object-cover"
            />
            {/* Overlay Divs */}
            <div className="absolute bottom-0 left-0 p-2.5 md:p-4 flex space-x-4 bg-[#171e28] bg-opacity-50 md:ml-12 ml-2 md:mb-5 mb-2 lg:ml-24 rounded-xl">
              {apiData.slice(0, itemsToShow).map((data, index) => (
                <ShowValueWithArrow
                  key={index}
                  value={data.value}
                  text={data.title}
                  isIncreasing={data.rate_is_increasing}
                  units={data.unit_abbr}
                  textColor={getTextColor(data.value)} // Determine text color based on value
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:text-2xl lg:ml-5 mt-3 lg:px-28">
        <h1 className="text-xl  " id="news">
          News & Features
        </h1>
        <br />
        <div className="">
          {newsData?.items?.map((data, index) => (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-5">
              <div className="md:col-span-1">
                <img
                  src={`https://climate.nasa.gov${data.thumb_webp}`}
                  alt={data.title}
                  className="w-full  h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-5">
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.description}</p>
                <a
                  href={`https://climate.nasa.gov${data.url}`}
                  target={data.target}
                  className="text-blue-500 hover:text-blue-700 text-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function getTextColor(value) {
  if (value > 0) {
    return "text-green-500"; // Green for increasing values
  } else if (value < 0) {
    return "text-red-500"; // Red for decreasing values
  } else {
    return "text-yellow-500"; // Yellow for zero values (customize as needed)
  }
}
