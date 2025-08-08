'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/app/config/projects';
import { Button } from '@/app/utils/components/button';
import { isMinimal } from '@/app/utils';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const carouselTimer = useRef<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<Record<number, 'left' | 'right'>>({});

  useEffect(() => {
    const updateSize = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getSlideVariants = (projectId: number) => {
    const direction = slideDirection[projectId] || 'right';
    return {
      enter: { x: direction === 'right' ? '100%' : '-100%' },
      center: { x: 0 },
      exit: { x: direction === 'right' ? '-100%' : '100%' },
    };
  };

  useEffect(() => {
    const initialActiveSlides: Record<number, number> = {};
    const initialDirections: Record<number, 'left' | 'right'> = {};

    projects.forEach(project => {
      if (project.carouselImages?.length) {
        initialActiveSlides[project.id] = 0;
        initialDirections[project.id] = 'right';
      }
    });

    setActiveSlides(initialActiveSlides);
    setSlideDirection(initialDirections);

    return () => {
      if (carouselTimer.current) clearTimeout(carouselTimer.current);
    };
  }, []);

  useEffect(() => {
    if (isMinimal) return;
    if (carouselTimer.current) clearTimeout(carouselTimer.current);

    if (hoveredProject !== null) {
      const project = projects.find(p => p.id === hoveredProject);
      if (project?.carouselImages?.length && project.carouselImages.length > 1) {
        const startCarousel = () => {
          carouselTimer.current = window.setTimeout(() => {
            setSlideDirection(prev => ({ ...prev, [project.id]: 'right' }));
            setActiveSlides(prev => ({
              ...prev,
              [project.id]: (prev[project.id] + 1) % project.carouselImages!.length,
            }));
            if (project.carouselConfig?.infinite !== false) startCarousel();
          }, project.carouselConfig?.interval || 3000);
        };
        startCarousel();
      }
    }

    return () => {
      if (carouselTimer.current) clearTimeout(carouselTimer.current);
    };
  }, [hoveredProject, activeSlides]);

  const navigateCarousel = (projectId: number, direction: number) => {
    const project = projects.find(p => p.id === projectId);
    if (!project?.carouselImages) return;

    if (carouselTimer.current) clearTimeout(carouselTimer.current);

    if (!isMinimal) {
      setSlideDirection(prev => ({
        ...prev,
        [projectId]: direction > 0 ? 'right' : 'left',
      }));
    }

    const imagesCount = project.carouselImages.length;
    const currentSlide = activeSlides[projectId] || 0;
    const nextSlide = (((currentSlide + direction) % imagesCount) + imagesCount) % imagesCount;

    setActiveSlides(prev => ({ ...prev, [projectId]: nextSlide }));

    if (!isMinimal && hoveredProject === projectId && project.carouselConfig?.infinite !== false) {
      carouselTimer.current = window.setTimeout(
        () => {
          setActiveSlides(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % project.carouselImages!.length,
          }));
        },
        Math.max(3000, project.carouselConfig?.interval || 3000)
      );
    }
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex(prev =>
      Math.max(0, Math.min(projects.length - projectsPerPage, prev + newDirection))
    );
  };

  const getTagColor = (tag: string) => {
    const tagColors: Record<string, string> = {
      React: 'bg-primary/20 text-primary border-primary/20',
      'Next.js': 'bg-foreground/20 text-foreground border-foreground/20',
      TypeScript: 'bg-primary/20 text-primary border-primary/20',
      Tailwind: 'bg-accent/20 text-accent border-accent/20',
      Flutter: 'bg-primary/20 text-primary border-primary/20',
      Go: 'bg-accent/20 text-accent border-accent/20',
      PostgreSQL: 'bg-primary/20 text-primary border-primary/20',
      Dart: 'bg-accent/20 text-accent border-accent/20',
      'Charm.sh': 'bg-primary/20 text-primary border-primary/20',
      default: 'bg-accent/10 text-accent border-accent/20',
    };
    return tagColors[tag] || tagColors.default;
  };

  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -right-20 top-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -left-20 bottom-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Projects
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s a collection of projects that showcase my skills and passion for building
            applications.
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-4">
          <button
            onClick={() => paginate(-1)}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-card/50 p-2 rounded-full disabled:opacity-30 text-foreground"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.div
            className="flex"
            animate={{ x: -currentIndex * (100 / projectsPerPage) + '%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {projects.map(project => (
              <motion.div
                key={project.id}
                className="flex-shrink-0 w-full px-4"
                style={{ width: `${100 / projectsPerPage}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="group h-full"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                    ${
                      hoveredProject === project.id
                        ? 'border-primary/50 shadow-xl shadow-primary/10 translate-y-[-5px]'
                        : 'border-border shadow-lg shadow-background'
                    }`}
                  >
                    <div className="relative overflow-hidden aspect-video min-h-[300px] bg-card/20 flex items-center justify-center">
                      {hoveredProject === project.id && project.gifUrl ? (
                        <Image
                          src={project.gifUrl}
                          alt={`${project.title} animation`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain"
                          priority
                        />
                      ) : project.carouselImages?.length && hoveredProject === project.id ? (
                        <>
                          <AnimatePresence initial={false}>
                            <motion.div
                              key={activeSlides[project.id] || 0}
                              variants={getSlideVariants(project.id)}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              transition={{ x: { duration: 0.4, ease: 'easeInOut' } }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <Image
                                src={project.carouselImages[activeSlides[project.id] || 0]}
                                alt={`${project.title} slide ${activeSlides[project.id] || 0}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain"
                                priority
                              />
                            </motion.div>
                          </AnimatePresence>

                          {project.carouselImages.length > 1 && (
                            <>
                              <button
                                onClick={e => {
                                  e.stopPropagation();
                                  navigateCarousel(project.id, -1);
                                }}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-card/50 p-1 rounded-full backdrop-blur-sm text-foreground hover:bg-card/70 transition-colors z-10"
                                aria-label="Previous slide"
                              >
                                <ChevronLeft size={16} />
                              </button>
                              <button
                                onClick={e => {
                                  e.stopPropagation();
                                  navigateCarousel(project.id, 1);
                                }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-card/50 p-1 rounded-full backdrop-blur-sm text-foreground hover:bg-card/70 transition-colors z-10"
                                aria-label="Next slide"
                              >
                                <ChevronRight size={16} />
                              </button>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="object-contain w-full h-auto max-h-[300px]"
                            priority
                          />
                        </div>
                      )}
                    </div>

                    <div className="p-6 pt-4 flex flex-col flex-grow">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        {project.type && (
                          <div className="inline-flex items-center justify-center bg-accent/10 text-accent border-accent/20 text-xs font-semibold px-2 py-0.5 rounded-full shadow-inner">
                            {project.type}
                          </div>
                        )}
                      </div>

                      <p className="mt-2 text-muted-foreground flex-grow">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2.5 py-1 text-xs rounded-full border ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex space-x-4">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-muted-foreground hover:text-accent transition-colors duration-300"
                              aria-label={`View live demo of ${project.title}`}
                            >
                              <ExternalLink size={18} className="mr-1.5" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-muted-foreground hover:text-accent transition-colors duration-300"
                            aria-label={`View code for ${project.title} on GitHub`}
                          >
                            <Github size={18} className="mr-1.5" />
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={() => paginate(1)}
            disabled={currentIndex >= projects.length - projectsPerPage}
            className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-card/50 p-2 rounded-full disabled:opacity-30 text-foreground"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * projectsPerPage)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex / projectsPerPage === i ? 'bg-primary' : 'bg-muted'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            href="https://github.com/Nomakhan16"
            label="View More Projects"
            icon={<Github size={18} />}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            iconType="default"
            className="inline-flex"
          />
        </div>
      </div>
    </section>
  );
};

export { Projects };
