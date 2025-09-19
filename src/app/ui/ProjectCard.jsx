import React from 'react';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
 

const ProjectCard = ({ project }) => {
  const mainHref = project.live_link || project.github_link || undefined;
  const isLive = Boolean(project.live_link);
  const Wrapper = mainHref ? 'a' : 'div';
  const aspectClass = 'aspect-[3/2]';

  return (
    <div>
      <Wrapper
        href={mainHref}
        target={mainHref ? '_blank' : undefined}
        rel={mainHref ? 'noreferrer noopener' : undefined}
        className="group block"
        aria-label={mainHref ? `Open ${project.title} ${isLive ? 'live site' : 'GitHub'}` : undefined}
      >
        <div className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl`}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`${project.image === '/github.svg' ? 'object-contain p-8' : 'object-cover p-8'} rounded-2xl transition-transform duration-500 group-hover:scale-[1.02] `}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority={false}
              unoptimized={project.image?.toLowerCase().endsWith('.gif')}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-950" />
          )}

          {/* Hover overlay indicating destination */}
          {mainHref && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/90 text-black shadow-md">
                {isLive ? (
                  <OpenInNewIcon fontSize="small" />
                ) : (
                  <Image src="/github.svg" alt="GitHub"  className='invert' width={20} height={20} />
                )}
              </div>
            </div>
          )}

        </div>
      </Wrapper>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
        {project.caption && (
          <p className="mt-1 text-sm text-neutral-400">{project.caption}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
