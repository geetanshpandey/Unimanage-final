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

  return (
    <div className="sm:w-1/3 mb-10 px-4">
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {data.title}
      </h2>
      {/* write a map query to show all the data in data.description */}
      {/* Do not change any logic except for css */}
      {/* Do not direcly copy paste from ai do it manually */}
      <p className="leading-relaxed text-base">{data.description}</p>
      <button
        onClick={CheckoutButton}
        disabled={loading}
        className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
      >
        {loading ? "loading..." : `Pay ₹`} {data.price}
      </button>
    </div>
  );
};

const Page = () => {
  return (
    // <section className="text-gray-600 body-font w-[80%] mx-auto">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-wrap -mx-4 -mb-10 text-center">
    //       {Products.map((product, index) => (
    //         <ProductCard data={product} key={index} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <div className="text-center">
      <h1 className="capitalize text-3xl">Pricing</h1>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Flexible Pricing to Fit Your Needs
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {Products.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
