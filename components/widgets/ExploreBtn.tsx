import { motion } from "framer-motion";

function ExploreBtn() {
  return (
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 0.95, borderRadius: "5px" }}
      transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
      className="uppercase text-[10px] max-[400px]:text-[8px] font-bold text-black bg-white px-4 max-[400px]:px-3 py-4 max-[400px]:py-3"
    >
      Explore the collection
    </motion.button>
  );
}

export default ExploreBtn;
