"use client"
import ToolIntegration from "@/components/toolsIntegration";
import FaqSection from "@/components/faqSection";
import Image from "next/image";
import { useState } from 'react';
import { Video, Sparkles, DollarSign } from 'lucide-react';
import heroImage from '@/public/1165424_8665.svg';
import heroImage3 from '@/public/5eKLSZwh3WIo6tT8oUpgs5xQxrQ.png';
import heroImage4 from '@/public/IdvIsFJqzUFaka88cL0CCAXIHKY.png';
import heroImage5 from '@/public/uSPMcReDiSjV8jE4Zd41qQVs1k.png';
import heroImage2 from '@/public/—Pngtree—purple swirling flash light effect_6487386.png';
export default function Home() {
  const [isYearly, setIsYearly] = useState(true);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };
  return <div>
    <section className="py-16 bg-black flex items-center justify-center">
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
            src={heroImage2}
            alt="Purple swirl art"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>

    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Unleash Your <span className="text-purple-500">Creativity</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Each app simplifies a process and empowers more people. Imagine the impact when
          everyone gets the right tool for the job, with perfect integration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1c1c1c] rounded-2xl p-6 text-left shadow-md">
            <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Video size={20} />
            </div>
            <h3 className="text-xl font-semibold">Real time collaboration</h3>
            <p className="text-gray-400 mt-2">
              Share your project details and let your team grasp your vision.
            </p>
          </div>

          <div className="bg-[#1c1c1c] rounded-2xl p-6 text-left shadow-md">
            <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-semibold">Generate Designs</h3>
            <p className="text-gray-400 mt-2">
              Watch as our app crafts unique design ideas tailored to you.
            </p>
          </div>

          <div className="bg-[#1c1c1c] rounded-2xl p-6 text-left shadow-md">
            <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <DollarSign size={20} />
            </div>
            <h3 className="text-xl font-semibold">Accounting</h3>
            <p className="text-gray-400 mt-2">
              Perfect your chosen concept with easy-to-use apps.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Left Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            High-Resolution <br /> <span className="text-purple-500">Outputs</span>
          </h1>
          <p className="text-gray-300 text-lg">
            So clean that you will experience work differently and avoid the
            frustration of slow interfaces, overflowing email inboxes, and endless data.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={heroImage5}
            alt="High-Resolution UI"
            className="w-[300px] max-w-full rounded-3xl shadow-lg"
            priority
          />
        </div>
        
      </div>
    </section>
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Right Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={heroImage3}
            alt="High-Resolution UI"
            className="w-[300px] max-w-full rounded-3xl shadow-lg"
            priority
          />
        </div>
        {/* Left Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Real-Time <br /> <span className="text-purple-500">Collaboration
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
          Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
        
      </div>
    </section>
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Left Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
          Advanced Scheduling <br /> <span className="text-purple-500">Tools
          </span>
          </h1>
          <p className="text-gray-300 text-lg">
          Plan and schedule your design projects with ease. Use our scheduling tools to set deadlines, track milestones, and ensure timely delivery of your design work.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={heroImage4}
            alt="High-Resolution UI"
            className="w-[300px] max-w-full rounded-3xl shadow-lg"
            priority
          />
        </div>
        
      </div>
    </section>
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Affordable Plans for <span className="text-purple-500">Every Need</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Choose the perfect plan for your streamlines operations across diverse functions, from sales and purchasing to HR and accounting. Automate tasks, gain real-time insights, and scale effortlessly!
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center mb-12 space-x-4">
          <span className={!isYearly ? 'text-white font-semibold' : 'text-gray-400'}>
            Monthly
          </span>
          <button
            onClick={togglePricing}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition duration-300 ${
              isYearly ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                isYearly ? 'translate-x-6' : ''
              }`}
            ></div>
          </button>
          <span className={isYearly ? 'text-white font-semibold' : 'text-gray-400'}>
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col justify-between border border-zinc-700">
            <div>
              <h3 className="text-2xl font-bold mb-2">FREE</h3>
              <p className="text-3xl font-extrabold mb-2">₹0/m</p>
              <p className="text-gray-400 mb-6">One app free forever</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✔ Basic design generation</li>
                <li>✔ Access to customization tools</li>
                <li>✔ Standard app library</li>
                <li>✔ 5 projects per month</li>
              </ul>
            </div>
            <button className="mt-6 border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition">
              Get Started
            </button>
          </div>

          {/* Basic Plan */}
          <div className="bg-purple-600 rounded-xl p-6 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">BASIC</h3>
              <p className="text-3xl font-extrabold mb-2">
                ₹{isYearly ? '449' : '499'}/m
              </p>
              <p className="text-sm mb-6">Billed {isYearly ? 'Yearly' : 'Monthly'}</p>
              <ul className="space-y-2 text-sm">
                <li>✔ Advanced generated designs</li>
                <li>✔ Full access to customization tools</li>
                <li>✔ Zemplates app library</li>
                <li>✔ Unlimited projects</li>
                <li>✔ Real-time collaboration</li>
                <li>✔ Priority email support</li>
              </ul>
            </div>
            <button className="mt-6 bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col justify-between border border-zinc-700">
            <div>
              <h3 className="text-2xl font-bold mb-2">PRO</h3>
              <p className="text-3xl font-extrabold mb-2">
                ₹{isYearly ? '899' : '999'}/m
              </p>
              <p className="text-sm text-gray-400 mb-6">Billed {isYearly ? 'Yearly' : 'Monthly'}</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✔ All features in Pro Plan</li>
                <li>✔ Dedicated account manager</li>
                <li>✔ Custom tools</li>
                <li>✔ Onboarding & training</li>
                <li>✔ 24/7 priority support</li>
                <li>✔ Analytics & reporting</li>
                <li>✔ Secure cloud storage</li>
              </ul>
            </div>
            <button className="mt-6 border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
    <ToolIntegration/>
    <FaqSection/>
    <section className="py-16 bg-gradient-to-b from-[#111111] to-black flex items-center justify-center pb-20">
      <div className="bg-[#1a1a1a] rounded-2xl px-8 py-14 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-white max-w-lg space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-purple-600">
          Start Your Business Journey Today
          </h1>
          <p className="text-gray-300 text-base md:text-md">
            All your business on one platform. Simple, efficient, yet affordable!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-2/5">
          <Image
            src={heroImage2}
            alt="Purple swirl art"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>

  </div>;
}
