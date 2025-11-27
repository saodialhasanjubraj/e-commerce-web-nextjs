"use client";
import React from "react";

const FaQ = ({ card }) => {
  console.log(card);
  return (
 
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12">
        Is my payment information secure?
        </div>
        <div className="collapse-content text-sm">Absolutely. All transactions are encrypted using SSL technology. We never store your complete payment details and accept all major credit cards, PayPal, Apple Pay, and Google Pay. Our website is PCI DSS compliant, meeting the highest security standards.</div>
      </div>
 
  );
};

export default FaQ;
