"use client";

import React, { useEffect } from "react";
import { useScrollDirection } from "@/hooks/UseScroll";
import { Plus, Search, Menu } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const ScrollY = useScrollDirection();

  const headercontrols = useAnimation();
  const Logocontrols = useAnimation();
  const linkcontrols = useAnimation();

  useEffect(() => {
    if (ScrollY === 0) {
      Logocontrols.start({ width: "100%", top: "230%" });
      linkcontrols.start({ opacity: 0 });
    } else {
      Logocontrols.start({ width: "150px", top: "50%" });
      linkcontrols.start({ opacity: 1 });
    }
  }, [ScrollY]);

  return (
    <header className="fixed w-[100vw] z-[99] bg-white">
      <motion.nav className="flex items-center justify-between max-w-7xl mx-auto h-20 w-full relative">
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
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          className="w-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src="/logo.svg" alt="" />
        </motion.div>

        <div className="flex items-center gap-5">
          <Search size={20} />
          <Menu size={20} />
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
