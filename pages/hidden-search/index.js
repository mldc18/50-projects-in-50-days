import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div.attrs({
  className: `
    font-Rubik font-light flex h-screen items-center justify-center 
    m-auto text-2xl sm:text-3xl md:text-5xl w-full overflow-hidden bg-sky-500`,
})``;

const Button = styled.button.attrs({
  className: `
    bg-white border-0 text-[24px] cursor-pointer absolute top-0 left-0 
    md:top-[9px] transition-[transform] duration-300 ease-in focus:outline-none`,
})``;

const HiddenSearch = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);

  function handleClickOpen() {
    setIsInputOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <div className={`search relative h-[50px] ${isInputOpen && "active"}`}>
        <input
          className="p-[15px] bg-white border-0 text-[18px] transition-[width] duration-300 ease-in"
          type="text"
          placeholder="Search..."
        />
        <Button onClick={handleClickOpen}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </div>
    </Container>
  );
};

export default HiddenSearch;
