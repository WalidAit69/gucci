import { X } from "lucide-react";
import React, { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/UseIsMobile";

interface Props {
  ShowMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

function NavMenu({ ShowMenu, setShowMenu }: Props) {
  const isMobile = useIsMobile();
  function CloseMenu() {
    setShowMenu(false);
  }

  const controls = useAnimation();
  const xcontrols = useAnimation();

  useEffect(() => {
    if (ShowMenu && !isMobile) {
      controls.start({
        right: 0,
        display: "block",
      });
      xcontrols.start({
        opacity: 1,
        display: "grid",
        transition: { delay: 1 },
      });
    } else if (ShowMenu && isMobile) {
      controls.start({
        left: 0,
        top: 0,
        display: "block",
      });
      xcontrols.start({
        opacity: 1,
        display: "grid",
        transition: { delay: 1 },
      });
    } else if (!ShowMenu && isMobile) {
      controls.start({ top: "100%" });
      controls.start({ display: "none", transition: { delay: 1 } });
      xcontrols.start({ opacity: 0, display: "none" });
    } else {
      controls.start({ right: "-50%" });
      controls.start({ display: "none", transition: { delay: 1 } });
      xcontrols.start({ opacity: 0, display: "none" });
    }
  }, [ShowMenu, isMobile]);

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={controls}
      transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
      className="fixed top-0 max-lg:top-[100%] z-[100] bg-white max-lg:bg-white/20 max-lg:backdrop-blur-xl h-[100vh] w-[600px] max-xl:w-[400px] max-lg:w-full overflow-y-scroll"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={xcontrols}
        transition={{ ease: [0.8, 0, 0, 0.8] }}
        className="fixed top-5 right-5 bg-black h-16 w-16 grid place-items-center rounded-full cursor-pointer hover:scale-90 transition-all"
      >
        <X color="white" size={30} onClick={CloseMenu} />
      </motion.div>

      <div className="text-xl max-2xl:text-base h-full py-20 px-10 flex flex-col gap-20 justify-between">
        <div className="">
          <ul className="flex flex-col gap-5 menuul">
            <li>Gifts</li>
            <li>New In</li>
            <li>Handbags</li>
            <li>Travel</li>
            <li>Women</li>
            <li>Men</li>
            <li>Children</li>
            <li>Jewellery & Watches</li>
            <li>Beauty</li>
            <li>Décor & Lifestyle</li>
            <li>World of Gucci</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3 mb-5">
            <li>Saved Items</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default NavMenu;
