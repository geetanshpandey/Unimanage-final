'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FaqSection() {
  const faqs = [
    'How does business management works?',
    'Can I customize the AI-generated designs?',
    'What support options are available?',
    'Is there a free trial available?',
    'How secure is my data?',
    'What integrations are available?',
  ]

  return (
    <section className="w-full bg-gradient-to-b from-black to-[#111111] py-24 px-4">
      <div className="mx-auto px-8 py-14 max-w-6xl w-full flex flex-col gap-12 md:flex-row items-center md:items-start">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Frequently Asked <br />
            <span className="text-[#A347FF]">Questions</span>
          </h2>
          <p className="text-gray-300 mt-4 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Have questions about our business management Assistant? Find answers to the most common questions and learn how our platform can enhance your creative process.
          </p>
        </div>

        {/* Right Accordion Section */}
        <div className="md:w-1/2 w-full bg-[#1C1C1C] rounded-2xl p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-white text-left text-sm md:text-base">{faq}</AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm">
                  This is placeholder content. You can customize the answer for "{faq}" here.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
