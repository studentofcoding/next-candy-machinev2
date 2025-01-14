import React from "react";
interface ReactCountdownProps {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
export default function ReactCountdown({
  days,
  hours,
  minutes,
  seconds,
}: ReactCountdownProps) {
  function padZeros(number: string) {
    return number.toString().padStart(2, "0");
  }
  return (
    <div className="flex flex-row container ">
      <div className="flex flex-col center w-full mx-auto mt-24">
        <div className="flex flex-row mx-auto text-gray-600  lg:p-8 p-3 text-center">
          <div className="flex flex-col">
            <p className="lg:text-6xl  text-3xl text-white font-aeonik-bold ">
              {padZeros(days)} :
            </p>
            <p className="-ml-4 text-gray-100">days</p>
          </div>
          <div className="flex flex-col">
            <p className="lg:text-6xl text-3xl text-white font-aeonik-bold">
              &nbsp; {padZeros(hours)} &nbsp;
            </p>
            <p className="lg:pl-4 text-gray-100">hours</p>
          </div>
          <div className="flex flex-col">
            <p className="lg:text-6xl text-3xl text-white font-aeonik-bold">
              : {padZeros(minutes)} &nbsp;
            </p>
            <p className="lg:pl-2 text-gray-100">min.</p>
          </div>
          <div className="flex flex-col">
            <p className="lg:text-6xl text-3xl text-white font-aeonik-bold">
              : {padZeros(seconds)}
            </p>
            <p className="lg:pl-6 text-gray-100"> sec.</p>
          </div>
        </div>
        <div className="flex flex-row mx-auto text-gray-300 my-0 text-center">
          <div className="flex flex-col">
            <p className="lg:text-3xl  text-1xl text-white font-aeonik ">
             Until public minting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
