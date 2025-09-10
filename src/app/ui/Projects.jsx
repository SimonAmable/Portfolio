import React from 'react';
import ProjectCard from './ProjectCard';
import { BlurFade } from "@/components/magicui/blur-fade";

const Projects = () => {
  const projectItems = [
    {
      title: 'EzApply',
      caption:
        'A web app that streamlines the job application process for students by creating customized cover letters and resumes grounded with simple RAG with real user data.',
      image: '/ez-apply-preview.png',
      live_link: 'https://ezapply-ai.vercel.app/',
      github_link: '',
      isWebsite: true,
    },
    {
      title: 'EzApply Chrome Extension',
      caption:
        'A chrome extension that streamlines the job application process for students by automatically filling out forms and creating application with AI.',
      image: '/ez-apply-chome-preview-2.png',
      live_link: 'https://ezapply-ai.vercel.app/automate',
      github_link: '',
      isWebsite: true,
    },
    {
      title: 'Intern Canada',
      caption:
        'A comprehensive internship platform connecting students with opportunities across Canada, Peaked at 100+ daily active users.',
      image: '/internshipseh.png',
      live_link: 'https://www.interncanada.com/',
      github_link: 'https://github.com/SimonAmable/INTERN-CANADA',
      isWebsite: true,
    },
    {
      title: 'MySuccessAutomation',
      caption:
        'A tool to automate your job search and application process.',
      image: '/github.svg',
      live_link: '',
      github_link: 'https://github.com/SimonAmable/MySuccessAutomation',
      isWebsite: false,
    },
    {
      title: 'Seeking Remedy - E-commerce store',
      caption:
        'A e-commerce store made in wordpress with woocommerce so help my friends sells clothing and accessories. Globally accessible in all languages, easy to manage, and scalable.',
      image: '/seeking_remedy_preview.png',
      live_link: 'https://seekingremedy.com/',
      github_link: '',
      isWebsite: true,
    },
    {
      title: 'EVNAV - Android Mobile App',
      caption:
        'A andoroid mobile app developed in kotlin that allows users to view and naviage to nearby EV charging history via Google Maps API, allong with other features like charging station availability, history, stataistics, etc.',
      image: '/github.svg',
      live_link: '',
      github_link: 'https://github.com/SimonAmable/ADVANCED_EV_UX',
      isWebsite: false,
    },
    // {
    //   title: 'Uncanny Edits - Web App',
    //   caption:
    //     'A web app developed in react that allows users to easily edit images using SOTA AI models like gemeni-2.5-flash (Nano-banana) to create realistic professional photoshop level edits with ease.',
    //   image: '/github.svg',
    //   live_link: 'https://ai-image-edit-github.vercel.app/',
    //   github_link: 'https://github.com/SimonAmable/ai_image_edit_github',
    //   isWebsite: false,
    // },
  ];

  return (
    <section id="projects" className="w-full px-5 md:px-6 lg:px-20 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        {projectItems.map((projectItem, index) => (
          <BlurFade key={index} direction="up" delay={index * 0.3 + 1.5}>
            <ProjectCard project={projectItem} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Projects;
