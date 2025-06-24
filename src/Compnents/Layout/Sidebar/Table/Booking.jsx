import React, { useState } from "react";
import BookingHeader from "./BookingHeader";
import TableSection from "./TableSection";

export default function Booking() {
  const [selectedPlace, setSelectedPlace] = useState("");

  return (
    <div className="p-6">
      <BookingHeader
        selectedPlace={selectedPlace}
        onPlaceChange={setSelectedPlace}
      />
      <TableSection selectedPlace={selectedPlace} />
    </div>
  );
}

