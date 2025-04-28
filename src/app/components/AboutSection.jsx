"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6 mt-6">
        {/* Professional Skills Section */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-[#D92E7E]">Professional Skills</h3>
          <ul className="list-disc pl-6 text-gray-300 mt-2">
            <li>MS Excel (Amateur)</li>
            <li>Power BI (Beginner)</li>
            <li>Data Analysis & Visualization</li>
            <li>Financial Modeling</li>
            <li>Market Research</li>
          </ul>
        </div>

        {/* Soft Skills Section */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-[#D92E7E]">Soft Skills</h3>
          <ul className="list-disc pl-6 text-gray-300 mt-2">
            <li>Communication</li>
            <li>Teamwork & Collaboration</li>
            <li>Leadership</li>
            <li>Problem-Solving</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6 mt-6">
        {/* Education Item 1 */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <span className="text-2xl font-bold text-[#D92E7E]">PGDM in Finance</span>
          <p className="text-lg text-gray-300 mt-2">ISBR Business School, Bangalore (2024–2026)</p>
        </div>

        {/* Education Item 2 */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <span className="text-2xl font-bold text-[#D92E7E]">B.Com</span>
          <p className="text-lg text-gray-300 mt-2">Mount Carmel College, Bangalore — 7.7 CGPA (2020–2023)</p>
        </div>

        {/* Education Item 3 */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <span className="text-2xl font-bold text-[#D92E7E]">12th Grade</span>
          <p className="text-lg text-gray-300 mt-2">NITTE International School — 90% (2019–2020)</p>
        </div>

        {/* Education Item 4 */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <span className="text-2xl font-bold text-[#D92E7E]">10th Grade</span>
          <p className="text-lg text-gray-300 mt-2">NITTE International School — 71.6% (2017–2018)</p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-6 mt-6">
        {/* Certification 1 */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-[#D92E7E]">Master Microsoft Office 365 and Power</h3>
          <p className="text-lg text-gray-300 mt-2">Pursuing</p>
        </div>

        {/* Certification 2 */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-[#D92E7E]">Discounted Cash Flow Modeling</h3>
          <p className="text-lg text-gray-300 mt-2">Coursera Project Network (Pursuing)</p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-8  xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/me.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m Nandini Upadhayay, a commerce graduate and a passionate learner, currently diving deeper into the world of finance through my PGDM at ISBR Business School, Bangalore. Over the years, I’ve explored roles in sales, marketing, and client management, while also leading teams and volunteer initiatives that strengthened my leadership and organizational skills. I believe in staying curious, thinking creatively, and working strategically to solve problems and drive success.
            This portfolio is a glimpse into my academic, professional, and personal journey — the experiences that have shaped me, the skills I’ve built, and the values I bring to every opportunity I take on. Thanks for visiting!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
