import React from 'react';
import ReactIcon from '@/assets/images/skills/react.svg';
import NextIcon from '@/assets/images/skills/nextjs.svg';
import ProjectItem from '../molecules/ProjectItem';

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="RWA Marketplace"
            projectImage={NextIcon}
            projectUrl="/"
          />
          <ProjectItem
            title="Lender Pool"
            projectImage={ReactIcon}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
