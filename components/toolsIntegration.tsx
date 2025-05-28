'use client'

import React from 'react'
import Image from 'next/image'
import icon1 from '@/public/icons8-tools-24.png'
import icon2 from '@/public/icons8-tools-24.png'
import icon3 from '@/public/icons8-tools-24.png'
import icon4 from '@/public/icons8-tools-24.png'
import icon5 from '@/public/icons8-tools-24.png'
import icon6 from '@/public/icons8-tools-24.png'


const icons = [icon1, icon2, icon3, icon4, icon5, icon6]
const loopedIcons = [...icons, ...icons, ...icons]

const ToolIntegration = () => {
  return (
    <section className="bg-black py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-[#1e1e1e] rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Seamless Tool <br />
            <span className="text-purple-500">Integration</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-md">
            Unimanage offers seamless integration with a variety of popular
            design and project management tools, ensuring a smooth and efficient
            workflow.
          </p>
        </div>

        {/* Right Side Icons */}
        <div className="ml-auto flex gap-8 overflow-hidden h-[360px]">
          {/* Column 1 - Scroll Down */}
          <div className="relative h-full overflow-hidden w-[140px]">
            <div className="absolute animate-loop-down">
              {loopedIcons.map((icon, idx) => (
                <div key={`down-${idx}`} className="mb-12 flex justify-center">
                  <Image src={icon} alt="icon" width={56} height={56} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Scroll Up */}
          <div className="relative h-full overflow-hidden w-[140px]">
            <div className="absolute animate-loop-up">
              {loopedIcons.map((icon, idx) => (
                <div key={`up-${idx}`} className="mb-12 flex justify-center">
                  <Image src={icon} alt="icon" width={56} height={56} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Scroll Down */}
          <div className="relative h-full overflow-hidden w-[140px]">
            <div className="absolute animate-loop-down">
              {loopedIcons.map((icon, idx) => (
                <div key={`down2-${idx}`} className="mb-12 flex justify-center">
                  <Image src={icon} alt="icon" width={56} height={56} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loop-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes loop-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        .animate-loop-down {
          animation: loop-down 20s linear infinite;
        }

        .animate-loop-up {
          animation: loop-up 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default ToolIntegration
