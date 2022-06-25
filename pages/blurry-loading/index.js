import { useEffect, useState } from "react";

const BlurryLoading = () => {
  const [loadCount, setLoadCount] = useState(0);

  let load = 0;
  let blur = `blur(${loadCount + 100 - loadCount * 2}px)`;
  useEffect(() => {
    const interval = setInterval(() => {
      load += 1;
      if (load > 100) {
        clearInterval(interval);
      } else {
        setLoadCount((loadCount) => loadCount + 1);
      }
    }, 30);
  }, []);

  return (
    <div className="font-Rubik font-light flex h-screen w-screen items-center justify-center m-auto text-2xl sm:text-3xl md:text-6xl overflow-hidden">
      <section
        className={`bg bg-[url('/car.jpg')] absolute w-screen h-screen bg-center bg-cover top-0 left-0 -z-[1]`}
        style={{ filter: blur }}
      ></section>
      <div className="loading-text text-white">{loadCount}%</div>
    </div>
  );
};

export default BlurryLoading;
