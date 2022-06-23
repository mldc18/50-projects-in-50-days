import { useState } from "react";
import styled from "styled-components";

const RotatingNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openHandler() {
    setIsNavOpen(true);
  }

  function closeHandler() {
    setIsNavOpen(false);
  }

  return (
    <RotatingContainer>
      <RotatingNavigationContainer className={`${isNavOpen && "show-nav"}`}>
        <div className="circle-container fixed top-[-100px] left-[-100px]">
          <Circle>
            <CloseButton onClick={closeHandler}>X</CloseButton>
            <OpenButton onClick={openHandler}>O</OpenButton>
          </Circle>
        </div>

        <div className="max-w-[1000px] my-[50px] auto">
          <h1 className="m-0">Rotating Navigation</h1>
          <small className="text-[#555] italic">
            Content rotates upon opening
          </small>
        </div>
      </RotatingNavigationContainer>

      <nav className="nav fixed bottom-[40px] left-0 z-[100]">
        <ul className="list-none pl-[30px]">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </RotatingContainer>
  );
};

export default RotatingNavigation;

const RotatingContainer = styled.div.attrs({
  className:
    "rotating-container font-Rubik font-light text-2xl sm:text-3xl md:text-4xl overflow-hidden bg-[#333]",
})``;

const RotatingNavigationContainer = styled.div.attrs({
  className:
    "container origin-top-left transition-[transform] duration-300 ease-linear w-screen min-h-screen p-[50px] bg-[#fafafa]",
})``;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
`;

const OpenButton = styled(Button)`
  outline: none;
  left: 60%;
`;

const CloseButton = styled(Button)`
  outline: none;
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
`;

const Circle = styled.div.attrs({
  className:
    "circle bg-[#ff7979] h-[200px] w-[200px] rounded-full relative transition-[transform] duration-300 ease-linear",
})``;
