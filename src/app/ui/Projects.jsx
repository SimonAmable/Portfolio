import React from 'react';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectCard from './ProjectCard'; // Make sure the path to ProjectCard is correct

const Projects = () => {
  const projectItems = [
    {
      title: 'Automating My Job Applications',
      date: 'August 2024',
      technologies: 'Python, Selenium, OPENAI, MSWORD AUTOMATION...',
      description: 'A couple of python scripts that did all of my applications for me.',
      github: '',
      demo: '',
    },
    {
      title: 'Internships Eh - The Open Source Canadian Internship site.',
      technologies: 'Next.js, TailWind CSS, MUI, Python, CRON, Selenium, MongoDB...',
      description: 'A LIVE FULL-STACK job site made by hand to help me and others in Canada look for internships. Live and free for everyone to use. Click the Live Site button to Check it out now!',
      github: '',
      demo: '',
    },
    {
      title: 'Real Fall Damage Simulator',
      technologies: 'Python, Flask, Raspberry Pi, IOT',
      description: 'This one is really cool in my opinion, but it\'s hard to explain, so open the GitHub if you\'re interested!',
      github: '',
      demo: '',
    },
    {
      title: 'This Portfolio Website',
      technologies: 'Next.js, TailWind CSS',
      description: 'This website lol. I\'ve been overthinking this one for too long, so I went with this simple design, which I\'ll improve on later. Check out the GitHub to learn more!',
      github: '',
      demo: '',
    },
    {
      title: 'Ecommerce Store',
      technologies: 'Wordpress, WooCommerce, Custom CSS',
      description: 'A fully functional and pixel-perfect custom ecommerce store designed from the client\'s wireframe sketch.',
      github: '',
      demo: '',
    },
    {
      title: 'AI Document Search',
      technologies: 'Jupyter Notebooks, OPENAI API, LangChain, PineCone (Vector Database)',
      description: 'Added documents to a vector database to facilitate querying unique document content with AI, making the most of LLMs semantic search ability to gain an estimated 7-17% increase in subject-related accuracy. Check out the GitHub to learn more!',
      github: '',
      demo: '',
    }
  ];

  return (
    <div id="projects" className='text-white w-full min-h-96 px-5 '>
      <p className=' text-4xl font-semibold mb-10'>My Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        {projectItems.map((projectItem, index) => (
          <ProjectCard key={index} project={projectItem} style={{ animationDelay: `${index * 1}s` }} // Apply animation delay based on index
/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
