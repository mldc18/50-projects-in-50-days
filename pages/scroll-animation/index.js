import Card from "../../components/scroll-animation/card";
import { useEffect } from "react";

const ScrollAnimation = () => {
  const cards = Array(10)
    .fill(undefined)
    .map((card) => <Card />);

  function checkBoxes() {
    const cards = document.querySelectorAll(".box");
    const triggerBottom = (window.innerHeight / 5) * 4;

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", checkBoxes);
  }, []);

  return (
    <div className="font-Rubik font-light flex flex-col w-full overflow-x-hidden items-center justify-center m-auto text-2xl sm:text-3xl md:text-4xl bg-[#efedd6]">
      <h1 className="m-10">Scroll Animation</h1>
      {cards}
    </div>
  );
};

export default ScrollAnimation;
