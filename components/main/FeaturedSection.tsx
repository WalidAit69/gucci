"use client";

import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function FeaturedSection() {
  return (
    <section className="mt-[20rem] ">
      <h1 className="my-[8rem] w-full flex justify-center uppercase text-sm font-semibold">
        Featured
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid  grid-flow-col gap-4 mx-5">
          <div className="overflow-hidden w-[600px] ">
            <motion.img
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
              src="/featured.avif"
              alt=""
              className="w-full h-[730px] object-cover"
            />
          </div>

          <div className="max-w-md flex flex-col items-center justify-center text-center gap-10">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="text-5xl font-light"
            >
              THE SPIRIT OF <br /> GUCCI GIFT
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.5, 0, 0, 1] }}
              className="text-sm text-black/70 max-w-sm"
            >
              Simple encounters full of emotion come to the fore in the House's
              holiday campaign envisioned by Creative Director Sabato De Sarno.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.5, 0, 0, 1] }}
              className="uppercase font-semibold text-xs relative dicover-btn"
            >
              Discover more
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
