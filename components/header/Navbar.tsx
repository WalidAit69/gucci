"use client";

import React, { useEffect, useState } from "react";
import { useScrollDirection } from "@/hooks/UseScroll";
import { Plus, Search, Menu } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const ScrollY = useScrollDirection();

  const headercontrols = useAnimation();
  const headercontrol2 = useAnimation();
  const Logocontrols = useAnimation();
  const linkcontrols = useAnimation();

  useEffect(() => {
    if (ScrollY > 0) {
      headercontrols.start({ height: "80px" });
      Logocontrols.start({ width: "150px", top: "50%" });
      linkcontrols.start({ opacity: 1 });
      headercontrol2.start({ position: "fixed" });
    } else {
      headercontrols.start({ height: "350px" });
      Logocontrols.start({ width: "100%", top: "50%" });
      linkcontrols.start({ opacity: 0 });
      headercontrol2.start({ position: "static" });
    }
  }, [ScrollY]);

  return (
    <motion.header
      animate={headercontrol2}
      transition={{ duration: 0.5, ease: [0.8, 0, 0, 0.8] }}
      className="fixed w-full z-[99] bg-white"
    >
      <motion.nav
        animate={headercontrols}
        className="flex items-center justify-between max-w-7xl mx-auto h-20 w-full relative"
      >
        <motion.div
          animate={linkcontrols}
          className="flex items-center gap-2 text-sm"
        >
          <Plus size={13} />
          <p>Contact Us</p>
        </motion.div>
        <motion.div
          initial={{ top: "50%" }}
          animate={Logocontrols}
          className="w-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src="/logo.svg" alt="" />
        </motion.div>

        <div className="flex items-center gap-5 absolute right-0 top-7">
          <Search size={20} />
          <Menu size={20} />
        </div>
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;
