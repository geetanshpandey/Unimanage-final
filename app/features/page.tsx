'use client'

import Image from 'next/image'
import heroImage3 from '@/public/5eKLSZwh3WIo6tT8oUpgs5xQxrQ.png';
import heroImage4 from '@/public/IdvIsFJqzUFaka88cL0CCAXIHKY.png';
import heroImage5 from '@/public/uSPMcReDiSjV8jE4Zd41qQVs1k.png';

export default function FaqSection() {

  return (
    <section className="w-full bg-gradient-to-b from-black to-[#111111] py-24 px-4">
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
            className="w-[350px] max-w-full rounded-3xl shadow-lg"
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
    </section>
  )
}
