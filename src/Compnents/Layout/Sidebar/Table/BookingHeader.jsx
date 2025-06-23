export default function BookingHeader({ selectedPlace, onPlaceChange }) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => onPlaceChange("inside")}
        className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
          selectedPlace === "inside"
            ? "bg-[#246FA8] text-white"
            : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
        }`}
      >
        Indoor
      </button>
      <button
        onClick={() => onPlaceChange("outside")}
        className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
          selectedPlace === "outside"
            ? "bg-[#246FA8] text-white"
            : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
        }`}
      >
        Outdoor
      </button>
      <button
        onClick={() => onPlaceChange("")}
        className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
      >
        Show All
      </button>
    </div>
  );
}
