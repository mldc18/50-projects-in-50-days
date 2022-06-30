import { useState } from "react";
import fetchRandomJoke from "../../libs/dad-jokes/dad-jokes";
import styled from "styled-components";

const Button = styled.button.attrs({
  className: `
    joke-btn bg-[#9F68E0] border-0 rounded-lg text-white 
    shadow-xl py-[14px] px-[40px] text-[16px] cursor-pointer 
    focus:outline-none active:scale-95`,
})``;

const MainContainer = styled.div.attrs({
  className: `
        font-Rubik font-light flex flex-column h-screen 
        items-center justify-center m-auto text-2xl 
        sm:text-3xl md:text-4xl overflow-hidden bg-indigo-500`,
})``;

const DadJokes = (props) => {
  const { joke } = props;
  const [currentJoke, setCurrentJoke] = useState(joke);

  async function handleClickGetJoke() {
    const newJoke = await fetchRandomJoke();
    setCurrentJoke(newJoke.joke);
  }

  return (
    <MainContainer>
      <div className="container-dad bg-white rounded-lg box shadow-xl px-[20px] py-[50px] text-center max-width-full w-[800px]">
        <h3 className="m-0 opacity-40 tracking-widest">Dont Laugh Challenge</h3>
        <div
          className="joke text-[30px] tracking-wider leading-10 m-[50px] max-width-[600px]"
          id="joke"
        >
          {currentJoke}
        </div>
        <Button id="joke-btn" onClick={handleClickGetJoke}>
          Get Another Joke
        </Button>
      </div>
    </MainContainer>
  );
};

export async function getStaticProps() {
  const initialJoke = await fetchRandomJoke();

  return {
    props: initialJoke,
  };
}

export default DadJokes;
