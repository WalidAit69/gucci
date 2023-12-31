"use client";

import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ServicesSection() {
  return (
    <section className="mb-10">
      <h1 className="mt-[10rem] mb-[4rem] w-full flex justify-center uppercase text-5xl max-2xl:text-3xl">
        GUCCI SERVICES
      </h1>

      <div className="max-w-[1700px] max-2xl:max-w-7xl mx-auto">
        <div className="grid place-items-center gap-4 mx-5 ">
          <div className="overflow-hidden w-[60%] max-[500px]:h-[300px] max-lg:w-full">
            <motion.img
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
              src="/services.avif"
              alt=""
              className="w-full h-[500px] max-lg:h-full object-cover"
            />
          </div>

          <div className="max-w-md max-lg:max-w-full flex flex-col items-center justify-center text-center gap-5 mt-4 ">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              className="text-2xl max-2xl:text-xl font-semibold"
            >
              BOOK AN APPOINTMENT
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.5, 0, 0, 1] }}
              className="text-base max-2xl:text-sm text-black font-light max-w-sm max-lg:max-w-full"
            >
              Enjoy priority access to the boutique of your choice at the time
              and date that suits you. When you arrive, your Client Advisor will
              guide you through a hand-picked selection of pieces for you to
              try-on and style.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.5, 0, 0, 1] }}
              className="font-semibold text-base max-2xl:text-sm relative dicover-btn"
            >
              Book an In Store Appointment{" "}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
