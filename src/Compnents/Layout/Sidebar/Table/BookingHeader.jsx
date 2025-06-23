import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa"; 

export default function BookingHeader() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const dateOptions = ["5 May, 2025", "6 May, 2025", "7 May, 2025"];
  const timeOptions = ["1:30 PM", "3:00 PM", "5:00 PM"];

  return (
    <div className="flex justify-between items-center w-full mb-6 flex-wrap gap-y-4">
    
      <div className="flex gap-4">
        <button className="bg-white text-[#246FA8] border border-[#246FA8] px-4 py-2 rounded-md hover:bg-[#246FA8] hover:text-white transition">
          Indoor
        </button>
        <button className="bg-white text-[#246FA8] border border-[#246FA8] px-4 py-2 rounded-md hover:bg-[#246FA8] hover:text-white transition">
          Outdoor
        </button>
      </div>

     
      <div className="flex gap-4 flex-wrap">
       
        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-[#246FA8]">Date</label>
          <div className="relative">
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-48 bg-white border border-[#246FA8] text-[#246FA8] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#246FA8] appearance-none pr-10 cursor-pointer"
            >
              <option value="" disabled>
                -- Select Date --
              </option>
              {dateOptions.map((date, idx) => (
                <option key={idx} value={date}>
                  {date}
                </option>
              ))}
            </select>
          
            <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#246FA8] pointer-events-none" />
          </div>
        </div>

        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-[#246FA8]">Time</label>
          <div className="relative">
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-48 bg-white border border-[#246FA8] text-[#246FA8] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#246FA8] appearance-none pr-10 cursor-pointer"
            >
              <option value="" disabled>
                -- Select Time --
              </option>
              {timeOptions.map((time, idx) => (
                <option key={idx} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <FaRegClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#246FA8] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

