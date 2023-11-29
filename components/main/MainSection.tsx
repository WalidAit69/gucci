"use client";

import React from "react";
import { motion } from "framer-motion";

function MainSection() {
  return (
    <>
      <section className="h-full flex flex-col justify-center items-center gap-20 relative transition-all">
        <video
          muted
          loop
          autoPlay
          src="/main.mp4"
          className="w-[800px] h-full px-4"
        ></video>

        <div className="sticky bottom-4 flex flex-col items-center gap-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
            className="text-5xl max-lg:text-4xl max-sm:text-3xl max-[400px]:text-lg uppercase"
          >
            Gifts for her
          </motion.h1>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 0.95, borderRadius: "5px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.5, 0, 0, 1] }}
            className="uppercase text-[10px] max-[400px]:text-[8px] font-bold text-white bg-black px-4 max-[400px]:px-3 py-4 max-[400px]:py-3"
          >
            Explore the collection
          </motion.button>
        </div>
      </section>
    </>
  );
}

export default MainSection;
