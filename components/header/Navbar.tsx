"use client";

import React, { useEffect, useState } from "react";
import { useScrollDirection } from "@/hooks/UseScroll";
import { Plus, Search, Menu } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import NavMenu from "./NavMenu";

function Navbar() {
  const [ShowMenu, setShowMenu] = useState(false);
  const ScrollY = useScrollDirection();

  const headercontrols = useAnimation();
  const headercontrol2 = useAnimation();
  const Logocontrols = useAnimation();
  const linkcontrols = useAnimation();

  useEffect(() => {
    if (ScrollY > 0) {
      headercontrols.start({ height: "80px" });
      Logocontrols.start({ width: "150px" });
      linkcontrols.start({ opacity: 1 });
      headercontrol2.start({ position: "fixed" });
    } else {
      headercontrols.start({ height: "350px" });
      Logocontrols.start({ width: "90%" });
      linkcontrols.start({ opacity: 0 });
      headercontrol2.start({ position: "static" });
    }
  }, [ScrollY]);

  useEffect(() => {
    if (ShowMenu) {
      document.body.classList.add("overflow-hidden");
      document.querySelectorAll(".isblur").forEach((el) => {
        el.classList.add("blured");
      });
    } else {
      document.body.classList.remove("overflow-hidden");
      document.querySelectorAll(".isblur").forEach((el) => {
        el.classList.remove("blured");
      });
    }
  }, [ShowMenu]);

  function OpenMenu() {
    setShowMenu(true);
  }

  return (
    <>
      <NavMenu ShowMenu={ShowMenu} setShowMenu={setShowMenu} />

      <motion.header
        animate={headercontrol2}
        transition={{ duration: 0.5, ease: [0.8, 0, 0, 0.8] }}
        className="isblur fixed w-full max-[400px]:w-[100vw] z-[99] bg-white"
      >
        <motion.nav
          animate={headercontrols}
          className="flex items-center justify-between max-2xl:max-w-7xl max-w-[2000px] mx-auto px-5 h-20 w-full relative"
        >
          <motion.div
            animate={linkcontrols}
            className="flex items-center gap-2 text-sm max-lg:hidden cursor-pointer"
          >
            <Plus size={13} />
            <p>Contact Us</p>
          </motion.div>
          <motion.div
            initial={{ top: "50%" }}
            animate={Logocontrols}
            className="w-[150px] absolute top-1/2 left-1/2 lg:-translate-x-1/2 -translate-y-1/2 max-lg:left-10 max-lg:-translate-x-5"
          >
            <img src="/logo.svg" alt="" />
          </motion.div>

          <div className="flex items-center gap-5 absolute right-5 top-7">
            <Search size={20} cursor={"pointer"} />

            <button onClick={OpenMenu}>
              <Menu size={20} cursor={"pointer"} />
            </button>
          </div>
        </motion.nav>
      </motion.header>
    </>
  );
}

export default Navbar;
