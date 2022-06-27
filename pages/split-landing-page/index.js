import styled from "styled-components";
import { useState } from "react";

const SplitLandingPage = () => {
  const [hover, setHover] = useState("");

  function handleHoverLeft() {
    setHover("hover-left");
  }

  function handleHoverRight() {
    setHover("hover-right");
  }

  return (
    <MainContainer>
      <Container hover={hover}>
        <SplitLeft
          className="bg-cover bg-center"
          onMouseEnter={handleHoverLeft}
        >
          <Header>PlayStation 5</Header>
          <Button
            className="btn-split hover:bg-sky-400 hover:border-sky-400"
            href="#"
          >
            Buy Now
          </Button>
        </SplitLeft>
        <SplitRight
          className="bg-cover bg-center"
          onMouseEnter={handleHoverRight}
        >
          <Header>XBox Series</Header>
          <Button
            className="btn-split hover:bg-slate-800 hover:border-slate-800"
            href="#"
          >
            Buy Now
          </Button>
        </SplitRight>
      </Container>
    </MainContainer>
  );
};

const SplitWrapper = styled.div.attrs({
  className: "absolute w-1/2 h-full overflow-hidden",
})``;

const SplitLeft = styled(SplitWrapper).attrs({
  className: `
    split left left-0 bg-[url('/ps5.jpg')] content-none
    before:absolute before:w-full before:h-full before:bg-sky-500 before:opacity-50
    transition-[width] duration-500 ease-in`,
})``;

const SplitRight = styled(SplitWrapper).attrs({
  className: `
    split right right-0 bg-[url('/xbox.jpg')] content-none
    before:absolute before:w-full before:h-full before:bg-slate-600 before:opacity-50
    transition-[width] duration-500 ease-in`,
})``;

const Header = styled.h1.attrs({
  className: `
    text-6xl whitespace-nowrap font-medium text-[#fff] 
    absolute left-2/4 top-1/4 -translate-x-1/2`,
})``;

const Button = styled.a.attrs({
  className: `
    absolute left-2/4 top-2/4 -translate-x-1/2
    no-underline text-[#fff] border border-[#fff]
    text-base w-[15rem] p-6 flex items-center 
    justify-center font-semibold uppercase`,
})``;

const Container = styled.div.attrs((props) => ({
  className: `
    container-split relative w-full h-full bg-[#333] 
    ${props.hover}`,
}))``;

const MainContainer = styled.div.attrs({
  className:
    "font-Rubik font-light h-screen m-0 text-2xl sm:text-3xl md:text-4xl overflow-hidden",
})`
  .hover-left .left {
    width: 75%;
  }

  .hover-left .right {
    width: 25%;
  }

  .hover-right .right {
    width: 75%;
  }

  .hover-right .left {
    width: 25%;
  }
`;

export default SplitLandingPage;
