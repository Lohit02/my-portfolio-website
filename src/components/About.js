/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <div>
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}

            className="flex bg-about bg-contain bg-no-repeat lg:w-[640px] h-[640px] mix-blend-lighten bg-top"></motion.div>
          </div>
          {/* text */}
          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          >
            <div className="flex-1">
              <h2 className="h2 text-accent mt-10">About Me.</h2>
              <h3 className="h3 mb-3">
                I'm a Machine Learning and AI enthusiast, ardent learner and a highly optimistic person.
              </h3>
              <p className="mb-6">
              Passionate about blending creativity and innovation, I'm a web developer and machine learning enthusiast. With a focus on delivering exceptional user experiences, I strive to create impactful solutions at the intersection of technology and design.
              </p>
            </div>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={100} duration={3} />+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Leetcode <br />
                  problems
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={5} duration={3} /> 
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={2} duration={5} />
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Internship <br />
                  Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
