import React from 'react';
import LenderImage from '@/assets/images/projects/lenderPool.png';
import ProjectItem from '../molecules/ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Lender Pool"
            projectImage={LenderImage}
            projectUrl="https://lender.polytrade.app/"
            technologies="Express Js, React Js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
