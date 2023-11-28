"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ExploreBtn from "../widgets/ExploreBtn";

function ExploreSection() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const isInview = useInView(ref);
  const isInview2 = useInView(ref2);

  useEffect(() => {
    if (isInview) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 20, opacity: 0 });
    }
    if (isInview2) {
      controls2.start({ y: 0, opacity: 1 });
    } else {
      controls2.start({ y: 20, opacity: 0 });
    }
  }, [isInview, isInview2]);

  return (
    <section className="flex flex-col gap-0">
      <div className="h-[100vh] max-sm:h-[60vh] w-full mt-10 mx-auto relative">
        <div className="overflow-hidden px-5 w-full h-full">
          <div className="overflow-hidden h-full max-sm:h-f">
            <motion.img
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
              src="/main1.avif"
              alt=""
              className="w-[100vw] h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[10%] text-white left-1/2 -translate-x-1/2 uppercase text-xs font-bold bg-white/20 px-3 py-1 backdrop-filter backdrop-blur-sm">
          <p>women</p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center text-center max-lg:w-full max-lg:max-w-xl max-sm:max-w-md max-[400px]:max-w-[15rem] gap-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
            className="text-5xl max-lg:text-4xl max-sm:text-3xl max-[400px]:text-lg w-full uppercase text-white font-medium"
          >
            velvet gg marmont online exclusive
          </motion.h1>
          <ExploreBtn />
        </div>
      </div>

      <div className="gap-5 h-full mt-5 mx-5 relative grid grid-cols-2 max-lg:flex max-lg:flex-col">
        <div className="relative h-[80%] max-2xl:h-[70%]">
          <div className="relative h-full w-full">
            <div className="overflow-hidden">
              <motion.img
                initial={{ scale: 1.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
                src="/main2.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-1/2 w-1 h-full" ref={ref}></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            className="sticky max-lg:absolute w-full bottom-[3rem] flex flex-col items-center text-center gap-4"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="text-4xl max-lg:text-3xl max-sm:text-2xl max-[400px]:text-lg uppercase text-white font-medium"
            >
              gifts for him
            </motion.h1>
            <ExploreBtn />
          </motion.div>

          <div className="absolute top-[10%] text-white left-1/2 -translate-x-1/2 uppercase text-xs font-bold bg-white/20 px-3 py-1 backdrop-filter backdrop-blur-sm">
            <p>men</p>
          </div>
        </div>

        <div className="relative h-[80%] max-2xl:h-[70%] ">
          <div className="relative h-full w-full">
            <div className="overflow-hidden">
              <motion.img
                initial={{ scale: 1.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
                src="/main3.avif"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-1/2 w-1 h-full" ref={ref2}></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={controls2}
            className="sticky max-lg:absolute w-full bottom-[3rem] flex flex-col items-center text-center gap-4"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="text-4xl max-lg:text-3xl max-sm:text-2xl max-[400px]:text-lg uppercase text-white font-medium"
            >
              jewelry
            </motion.h1>
            <ExploreBtn />
          </motion.div>

          <div className="absolute top-[10%] text-white left-1/2 -translate-x-1/2 uppercase text-xs font-bold bg-white/20 px-3 py-1 backdrop-filter backdrop-blur-sm">
            <p>women & men</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
