import React from 'react';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectCard = ({ project,style }) => {
  return (
    <div className="project-card p-4 bg-gray-900 flex flex-col justify-between fade-in" style={style}>
      <div className='flex flex-row justify-between items-center'>
        <p className='font-semibold lg:text-xl text-lg'>{project.title}</p>
        {project.date && <p className='font-semibold text-base'>{project.date}</p>}
      </div>
      <p className='text-gray-400'>{project.technologies}</p>
      <p className='text-gray-300'>{project.description}</p>
      <div className='flex justify-between  pt-1'>
      {project.github_link && <a target="_blank" href={project.github_link} className='hover:opacity-70'>
          <Image src='/github.svg' width={30} height={30} alt="Github Link" />
        </a> }
        <div></div>
        {project.live_link && <a target="_blank" href={project.live_link} className='flex flex-row border rounded p-1 hover:opacity-70'>
          <p>Live Demo:</p>
          <OpenInNewIcon />
        </a> }
      </div>
    </div>
  );
};

export default ProjectCard;
