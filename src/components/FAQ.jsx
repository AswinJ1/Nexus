import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    { question: "What is Nexus App?", answer: "Nexus App is a productivity tool designed to help you manage tasks and improve efficiency." },
    { question: "How does Nexus improve productivity?", answer: "It uses AI insights and advanced task prioritization to streamline your workflow." },
    { question: "Is Nexus available on mobile?", answer: "Yes, Nexus is available on both iOS and Android platforms." },
    { question: "How secure is my data on Nexus?", answer: "Your data is encrypted and stored securely, ensuring maximum privacy." },
    { question: "Is there a free version of Nexus?", answer: "Yes, Nexus offers a free plan with basic features and paid plans for advanced functionality." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-lg font-medium">{faq.question}</p>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    <footer className="bg-indigo-700 text-white py-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-sm sm:text-base">
      Made with <span className="text-red-500">❤️</span> by <span className="font-bold">Aswin J</span>
    </p>
  </div>
</footer>

    </section>


  );
};

export default FAQ;
