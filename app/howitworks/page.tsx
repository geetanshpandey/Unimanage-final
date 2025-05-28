import React from "react";
import { Video, Sparkles, DollarSign } from 'lucide-react';

const page = () => {
  return <div>
    <section className="bg-black text-white px-6 py-16 min-h-screen">
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
  </div>;
};

export default page;
