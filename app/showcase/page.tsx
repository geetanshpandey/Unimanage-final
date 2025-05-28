"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import mainImage from "@/public/—Pngtree—purple swirling flash light effect_6487386.png"

const categories = [
  {
    title: "FINANCES",
    items: [
      { name: "BillPro", href: "/finance/billpro" },
      { name: "Pennywise", href: "/finance/pennywise" },
      { name: "Save bills", href: "/finance/save-bills" },
    ],
  },
  {
    title: "SALES",
    items: [
      { name: "Total Sales", href: "/sales/total" },
      { name: "Invoice Sales", href: "/sales/invoice" },
      { name: "Agency Sales", href: "/sales/agency" },
    ],
  },
  {
    title: "WEBSITES",
    items: [
      { name: "Website Builder", href: "/websites/builder" },
      { name: "Website Editor", href: "/websites/editor" },
      { name: "Domain", href: "/websites/domain" },
    ],
  },
  {
    title: "SUPPLY CHAIN",
    items: [
      { name: "Stockify", href: "/supply/stockify" },
      { name: "Teams", href: "/supply/teams" },
      { name: "Tasktitan", href: "/supply/tasktitan" },
    ],
  },
  {
    title: "HUMAN RESOURCES",
    items: [
      { name: "Admin", href: "/hr/admin" },
      { name: "Teamtrack", href: "/hr/teamtrack" },
      { name: "Departments", href: "/hr/departments" },
    ],
  },
  {
    title: "AUTOMATION",
    items: [
      { name: "Financeflow", href: "/automation/financeflow" },
      { name: "Socially", href: "/automation/socially" },
      { name: "Neosite", href: "/automation/neosite" },
    ],
  },
  {
    title: "SERVICES",
    items: [
      { name: "Pipelines", href: "/services/pipelines" },
      { name: "Calendly", href: "/services/calendly" },
      { name: "Connecto", href: "/services/connecto" },
    ],
  },
  {
    title: "PRODUCTIVITY",
    items: [
      { name: "Journalize", href: "/productivity/journalize" },
      { name: "Quickchat", href: "/productivity/quickchat" },
      { name: "Pixel", href: "/productivity/pixel" },
    ],
  },
];

const FeaturesGrid = () => {
  return (
    <div>
      <section className="py-16 bg-black flex items-center justify-center -mt-4">
      <div className="bg-[#1a1a1a] rounded-2xl px-8 py-14 max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-white max-w-lg space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Business<br />
            Management<br />
            Assistant
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            All your business on one platform. Simple, efficient, yet affordable!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-2/5">
          <Image
            src={mainImage}
            alt="Purple swirl art"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 pt-1 -mt-40">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 text-left max-w-6xl w-full">
        {categories.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-purple-400 font-bold mb-2 text-2xl">{section.title}</h3>
            <ul className="space-y-1 text-white">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link href={item.href} className="hover:text-purple-400 transition text-xl">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeaturesGrid;
