import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";

function ShowValueWithArrow({ value, text, isIncreasing, units }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="">
      <div className="flex">
        <div className="ml-2">
          {isIncreasing ? (
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-red-500 text-xs sm:text-lg"
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-red-500 text-xs sm:text-lg"
            />
          )}
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h1 className="text-xl">{text}</h1>
          <p className="text-xs mt-3">
            {text === "Carbon Dioxide" && (
              <>
                Carbon dioxide (CO2) is an important heat-trapping gas, or
                greenhouse gas, that comes from the extraction and burning of
                fossil fuels (such as coal, oil, and natural gas), from
                wildfires, and from natural processes like volcanic eruptions.
                The first graph shows atmospheric carbon dioxide (CO2) levels
                measured by NOAA at Mauna Loa Observatory, Hawaii, since 1958.
                Since the onset of industrial times in the 18th century, human
                activities have raised atmospheric CO2 by 50% – meaning the
                amount of CO2 is now 150% of its value in 1750. This
                human-induced rise is greater than the natural increase observed
                at the end of the last ice age 20,000 years ago.
              </>
            )}
            {text === "Global Temp" && (
              <>
                According to NOAA's 2023 Annual Climate Report the combined land
                and ocean temperature has increased at an average rate of 0.11°
                Fahrenheit (0.06° Celsius) per decade since 1850, or about 2° F
                in total. The rate of warming since 1982 is more than three
                times as fast: 0.36° F (0.20° C) per decade.
              </>
            )}
            {text === "Methane" && (
              <>
                Methane (CH4) is a powerful greenhouse gas, and is the
                second-largest contributor to climate warming after carbon
                dioxide (CO2). A molecule of methane traps more heat than a
                molecule of CO2, but methane has a relatively short lifespan of
                7 to 12 years in the atmosphere, while CO2 can persist for
                hundreds of years or more. Methane comes from both natural
                sources and human activities. An estimated 60% of today’s
                methane emissions are the result of human activities. The
                largest sources of methane are agriculture, fossil fuels, and
                decomposition of landfill waste. Natural processes account for
                40% of methane emissions, with wetlands being the largest
                natural source. (Learn more about the Global Methane Budget.)
              </>
            )}
            {text === "Ice Sheets" && (
              <p>
                The most evident impact observed to date is a loss of ice due to
                warmer air and ocean waters. Warmer air causes the ice to melt
                more quickly and flow more rapidly to the sea, especially in
                low-elevation regions near the edges of the ice sheets.
              </p>
            )}
          </p>
        </Modal>
        <div
          className="flex cursor-pointer "
          onClick={(e) => setModalOpen(true)}
        >
          <p className="text-[#fefefe] ml-1.5  text-xl">{value}</p>
          <p className="text-[#fefefe] mt-0.5 ml-2  font-thin	 text-xs">
            {units}
          </p>
        </div>
      </div>
      <div className="ml-2 text-left">
        <p className="text-[#b8b9c0]   text-[11px] cursor-pointer ">{text}</p>
      </div>
    </div>
  );
}

export default ShowValueWithArrow;
