import styled from "styled-components";

const Circle = (props) => {
  const { className, children } = props;

  return <CircleWrapper className={className}>{children}</CircleWrapper>;
};

const CircleWrapper = styled.div.attrs({
  className: `
          bg-[#fff] text-[#999] rounded-full h-10 w-10 sm:h-20 sm:w-20 
          flex items-center justify-center
          border-solid border-4 border-[#e0e0e0]
          transition duration-500 ease in circle
          ${(props) => props.isActive && "active"}
      `,
})``;

export default Circle;
