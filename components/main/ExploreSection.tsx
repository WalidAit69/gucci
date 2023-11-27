"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ExploreSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInview = useInView(ref);

  useEffect(() => {
    if (isInview) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 20, opacity: 0 });
    }
  }, [isInview]);

  return (
    <section className="">
      <div className="h-[100vh] mt-10 max-w-[1500px] mx-auto relative">
        <div className="overflow-hidden relative">
          <motion.img
            initial={{ scale: 1.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
            src="/main1.avif"
            alt=""
          />
        </div>

        <div className="absolute top-[10%] text-white left-1/2 -translate-x-1/2 uppercase text-xs font-bold bg-white/20 px-3 py-1 backdrop-filter backdrop-blur-sm">
          <p>women</p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
            className="text-5xl uppercase text-white font-medium"
          >
            velvet gg marmont online exclusive
          </motion.h1>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 0.95, borderRadius: "5px" }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
            className="uppercase text-[10px] font-bold text-black bg-white px-4 py-4"
          >
            Explore the collection
          </motion.button>
        </div>
      </div>

      <div className="mt-40 gap-5 max-w-[1500px] mx-auto relative grid grid-cols-2">
        <div className="relative h-[110vh]">
          <div className="relative h-full w-full">
            <div className="overflow-hidden">
              <motion.img
                initial={{ scale: 1.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
                src="/main2.webp"
                alt=""
                className="h-[140vh] w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-1/2 w-1 h-full" ref={ref}></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            className="sticky bottom-[10rem] sm:bottom-[3rem] flex flex-col items-center text-center gap-4"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="text-4xl uppercase text-white font-medium"
            >
              gifts for him
            </motion.h1>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 0.95, borderRadius: "5px" }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="uppercase text-[10px] font-bold text-black bg-white px-4 py-4"
            >
              Explore the collection
            </motion.button>
          </motion.div>

          <div className="absolute top-[10%] text-white left-1/2 -translate-x-1/2 uppercase text-xs font-bold bg-white/20 px-3 py-1 backdrop-filter backdrop-blur-sm">
            <p>men</p>
          </div>
        </div>

        <div className="relative h-[110vh]">
          <div className="relative h-full w-full">
            <div className="overflow-hidden">
              <motion.img
                initial={{ scale: 1.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
                src="/main3.avif"
                alt=""
                className="h-[140vh] w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-1/2 w-1 h-full" ref={ref}></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            className="sticky bottom-[10rem] sm:bottom-[3rem] flex flex-col items-center text-center gap-4"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="text-4xl uppercase text-white font-medium"
            >
              jewelry
            </motion.h1>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 0.95, borderRadius: "5px" }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="uppercase text-[10px] font-bold text-black bg-white px-4 py-4"
            >
              Explore the collection
            </motion.button>
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
