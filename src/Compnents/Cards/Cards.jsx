import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cards() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/meals")
      .then((res) => {
        setMeals(res.data.data); 
      })
      .catch((err) => {

      });
  }, []);

  return (
    <div className="bg-white flex justify-center py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(meals) && meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal._id}
              className="w-[190px] h-[260px] border rounded-lg p-[15px] flex flex-col gap-[12px] shadow hover:scale-105 transition-transform duration-300"
              style={{ border: "1px solid #246FA8" }}
            >
              <img
                alt={meal.name}
                src={meal.image}
                className="w-full h-[100px] object-cover rounded"
              />
              <h3 className="text-md font-bold text-[#246FA8]">{meal.name}</h3>
              <p className="text-sm font-bold text-[#246FA8]">{meal.price} AED</p>
              <p className="text-xs text-[#246FA8]">
                {Array.isArray(meal.ingredients)
                  ? meal.ingredients.join(", ")
                  : ""}
              </p>
              <button className="mt-auto px-3 py-1 bg-[#246FA8] text-white text-sm rounded hover:bg-[#1a4f7c]">
                Add
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-[#246FA8] col-span-full">No meals found.</p>
        )}
      </div>
    </div>
  );
}



