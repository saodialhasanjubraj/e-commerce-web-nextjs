"use client";
import Image from "next/image";
import Link from "next/link";
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
          <Link key={card.id} href={`${card.id}`}>
            <div className="h-70 w-100 border-2">
              <div className="h-40 w-full flex items-center justify-center border-2">
                img
              </div>
              <div className="text-part">
                <h1 className="font-bold text-center">{card.title}</h1>
                <h1 className="">Category:{card.category}</h1>
              </div>
              <p>{card.description.slice(0, 30)} <span className="text-sky-500">See more.....</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
