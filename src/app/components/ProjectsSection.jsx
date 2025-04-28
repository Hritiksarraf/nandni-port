"use client";
import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Marketing Project - AISSCE (Class XII)",
    description: [
      "Conducted a competitive analysis for a product.",
      "Created branding elements like logo and label.",
      "Designed pricing strategies for market entry.",
      "Performed SWOT analysis to identify growth areas.",
    ],
  },
  {
    id: 2,
    title: "Accounting Project - AISSCE (Class XII)",
    description: [
      "Compiled profit & loss statement for a business model.",
      "Prepared simulated company financial reports.",
      "Analyzed key financial metrics and insights.",
      "Built understanding of real-world accounting practices.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-black">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="p-8 bg-[#1E1E1E] border-2 border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#D92E7E] mb-6">{project.title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-base">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
