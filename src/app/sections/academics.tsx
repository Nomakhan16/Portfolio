'use client';
import { portfolioConfig } from '@/app/config';
import { motion } from 'framer-motion';

export default function Academics() {
  const { academics } = portfolioConfig.sections;

  return (
    <div className="bg-background">
      <section id="academics" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Centered title with underline */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-foreground">Educational </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Background
              </span>
            </h1>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academics.education.map((edu, index) => (
              <div key={index} className="bg-card/50 p-6 rounded-lg border border-border">
                {/* Degree Heading */}
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {edu.degree}
                  </span>
                </h2>

                {/* Institution */}
                <h3 className="text-xl text-muted-foreground mb-1">{edu.institution}</h3>

                {/* Specialization */}
                {edu.specialization && (
                  <p className="text-muted-foreground mb-3">{edu.specialization}</p>
                )}

                {/* Period and Location */}
                <div className="text-muted-foreground space-y-1 mb-3">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>

                {/* Details */}
                <ul className="text-muted-foreground space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2 text-accent">-</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
