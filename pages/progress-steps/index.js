import { useState } from "react";
import styled from "styled-components";
import Circle from "../../components/progress-steps/circle";

const ProgressSteps = () => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const isPreviousButtonDisabled = currentProgress === 0 && true;
  const isNextButtonDisabled = currentProgress === 3 && true;
  const progressWidth = ((currentProgress / 3) * 100).toString() + "%";

  function handlePrevious() {
    setCurrentProgress((prevState) => prevState - 1);
  }

  function handleNext() {
    setCurrentProgress((prevState) => prevState + 1);
  }

  const progressSteps = circleData.map((content, index) => (
    <Circle className={`${index <= currentProgress && "active"}`}>
      {content}
    </Circle>
  ));

  return (
    <div className="font-Rubik font-light flex h-screen items-center justify-center m-auto text-2xl sm:text-3xl md:text-4xl w-10/12 lg:w-7/12 overflow-hidden">
      <div className="container text-center">
        <ProgressContainer>
          <Progress style={{ width: progressWidth }} />
          {progressSteps}
        </ProgressContainer>

        <div className="text-2xl sm:text-4xl">
          <button
            className="btn mr-4"
            onClick={handlePrevious}
            disabled={isPreviousButtonDisabled}
          >
            Prev
          </button>
          <button
            className="btn"
            onClick={handleNext}
            disabled={isNextButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const ProgressContainer = styled.div.attrs({
  className: `
    progress-container flex justify-between 
    relative mb-10 w-full max-w-10/12

    before:bg-[#e0e0e0] before:absolute before:top-2/4 before:left-0
    before:h-2 before:w-full before:z-[-1] before:content-[''] 
    before:-translate-y-2/4
    `,
})``;

const Progress = styled.div.attrs({
  className: `
    bg-sky-500 absolute top-2/4 left-0 h-2
    -translate-y-2/4 z-[-1] transition duration-500 ease-in
    `,
})``;

const circleData = [1, 2, 3, 4];

export default ProgressSteps;
