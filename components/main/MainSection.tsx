import React from "react";

function MainSection() {
  return (
    <section className="h-[170vh] flex flex-col justify-center items-center gap-20 relative">
      <video src="/main.mp4" className="w-[800px] h-[1000px]"></video>

      <div className="sticky bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <h1 className="text-4xl uppercase">Gifts for her</h1>
        <button className="uppercase text-[10px] font-bold text-white bg-black px-4 py-4">
          Explore the collection
        </button>
      </div>
    </section>
  );
}

export default MainSection;
