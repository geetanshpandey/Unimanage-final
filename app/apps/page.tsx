import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import mainImage from "@/public/—Pngtree—purple swirling flash light effect_6487386.png"
const categories = [
  {
    title: "FINANCES",
    items: [
      { name: "BillPro", href: "https://billpro.vercel.app/dashboard/invoices" },
      { name: "Pennywise", href: "https://pennywise3.vercel.app/transactions" },
      { name: "Save bills", href: "https://buildify1.vercel.app/agency/sign-in" },
    ],
  },
  {
    title: "SALES",
    items: [
      { name: "Total Sales", href: "https://pennywise3.vercel.app/sign-in?redirect_url=https%3A%2F%2Fpennywise3.vercel.app%2F" },
      { name: "Invoice Sales", href: "https://billpro.vercel.app/dashboard/invoices" },
      { name: "Agency Sales", href: "https://buildify1.vercel.app/agency/sign-in" },
    ],
  },
  {
    title: "WEBSITES",
    items: [
      { name: "Website Builder", href: "https://buildify1.vercel.app/agency/sign-in" },
      { name: "Website Editor", href: "https://buildify1.vercel.app/agency/sign-in" },
      { name: "Domain", href: "https://shopsphere.buildify1.vercel.app/" },
    ],
  },
  {
    title: "SUPPLY CHAIN",
    items: [
      { name: "Stockify", href: "https://stockify1.vercel.app/login" },
      { name: "Teams", href: "https://buildify1.vercel.app/agency/sign-in" },
      { name: "Tasktitan", href: "https://tasktitan1.vercel.app/" },
    ],
  },
  {
    title: "HUMAN RESOURCES",
    items: [
      { name: "Admin", href: "https://teamtrack1.vercel.app/" },
      { name: "Teamtrack", href: "https://teamtrack1.vercel.app/" },
      { name: "Departments", href: "https://teamtrack1.vercel.app/" },
    ],
  },
  {
    title: "AUTOMATION",
    items: [
      { name: "Financeflow", href: "https://financeflow1.vercel.app/" },
      { name: "Socially", href: "https://socially1.netlify.app/" },
      { name: "Neosite", href: "https://neosite1.vercel.app/" },
    ],
  },
  {
    title: "SERVICES",
    items: [
      { name: "Pipelines", href: "https://buildify1.vercel.app/agency/sign-in" },
      { name: "Calendly", href: "https://calendly1.vercel.app/" },
      { name: "Connecto", href: "https://connecto1.vercel.app/sign-in?redirect_url=https%3A%2F%2Fconnecto1.vercel.app%2F" },
    ],
  },
  {
    title: "PRODUCTIVITY",
    items: [
      { name: "Journalize", href: "https://journalize1.vercel.app/" },
      { name: "Quickchat", href: "https://slack-ruby-six.vercel.app/auth" },
      { name: "Pixel", href: "https://fond-squid-21.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fpixel1.vercel.app%2F" },
    ],
  },
];
const page = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/"); // Redirects to the homepage if the user is not logged in
  }
  return  (
    <div>
      <section className="py-16 bg-black flex items-center justify-center -mt-4">
      <div className="bg-[#1a1a1a] rounded-2xl px-8 py-14 max-w-3xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
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
            <h3 className="text-purple-400 font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1 text-white">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link href={item.href} className="hover:text-purple-400 transition">
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

export default page;
