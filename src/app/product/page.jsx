"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Correct path - file should be in /public folder
        const response = await fetch("/freeData.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Fetched data:", data); // Debug
        setCards(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-325 mx-auto flex items-center flex-col">
      <h1>Total Products {cards.length}</h1>

      <div className="mx-auto w-full max-w-325 grid grid-cols-3 gap-x-1 gap-y-1">
        {cards.map((card) => (
          <div key={card.id} className="h-50 w-100 border-2">
            <Image
              src={card.thumbnail}
              className="h-20 w-30"
              height={80}
              width={120}
              alt=""
              srcset=""
            />
            <h1>{card.id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
