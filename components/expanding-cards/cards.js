const Card = (props) => {
  const { bgImage, isActive, title, onClickActiveHandler } = props;

  return (
    <div
      className={`bg-${bgImage} bg-center flex-1 h-5/6 cursor-pointer text-white rounded-lg m-4 relative transition-[flex] duration-700 ease-in panel ${
        isActive && "active"
      }`}
      onClick={onClickActiveHandler}
    >
      <p className="absolute bottom-4 left-4 m-0 opacity-0 transition-[opacity] duration-300 ease-in delay-500 px-3 sm:px-0">
        {title}
      </p>
    </div>
  );
};

export default Card;
