"use client";
import React, { useEffect, useState } from "react";

export default function TopCards() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/freeData.json");
        const cards = await response.json();
        console.log(cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>TopCards</div>;
}
