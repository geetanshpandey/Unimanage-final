"use client";

import React, { useState } from "react";
import Products from "@/api/product.json";
import axios from "axios";

const ProductCard = ({ data }: { data: any }) => {
  const [loading, setLoading] = useState(false);
  const CheckoutButton = async () => {
    try {
      const response = await axios.post("/api/payment", {
        name: data.title,
        price: data.price,
      });

      const RepsneDta = await response.data;
      window.location.href = RepsneDta.url;
    } catch (error: any) {
      console.error("Failed to checkout", error);
    }
  };

  const isRecommended = data.tag === "recommended";

  return (
    <div
      className={`rounded-xl p-6 shadow-xl border ${
        isRecommended ? "bg-purple-600 text-white" : "bg-gray-900 text-white"
      } flex flex-col justify-between`}
    >
      <div className="justify-center">
        <p className="uppercase tracking-wide text-sm font-semibold opacity-70">
          {data.plan || ""}
        </p>
        <h2 className="text-3xl font-extrabold my-2">₹{data.price}/m</h2>
        <p className="text-sm mb-4 opacity-80">{data.subtitle || "Billed Yearly"}</p>
        <ul className="space-y-2 text-sm">
          {data.description.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-lg leading-none">○</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={CheckoutButton}
        disabled={loading}
        className={`mt-6 w-full py-2 px-4 rounded ${
          isRecommended
            ? "bg-white text-purple-600 hover:bg-gray-100"
            : "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
        } font-semibold transition duration-300`}
      >
        {loading ? "Loading..." : "Get Started"}
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <section className="py-16 px-6 bg-black min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white">
          Affordable Plans for <span className="text-purple-500">Every Need</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Choose the perfect plan for your streamlined operations across diverse functions, from sales and purchasing to HR and accounting. Automate tasks, gain real-time insights, and scale effortlessly!
        </p>
        <div className="flex justify-center mt-6 gap-4 items-center text-sm">
          <span className="text-white">Monthly</span>
          <span className="relative inline-flex items-center cursor-pointer">
            <span className="w-10 h-5 bg-gray-700 rounded-full flex items-center px-1">
              <span className="h-4 w-4 bg-white rounded-full ml-auto"></span>
            </span>
          </span>
          <span className="text-white font-semibold">Yearly</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto justify-center items-center">
        {Products.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Page;
