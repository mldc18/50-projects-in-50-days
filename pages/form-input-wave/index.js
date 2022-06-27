import styled from "styled-components";

const FormInputWave = () => {
  function generateSpans(word) {
    const spans = word
      .split("")
      .map((letter, index) => (
        <FormControlSpan style={{ transitionDelay: `${index * 50}ms` }}>
          {letter}
        </FormControlSpan>
      ));

    return spans;
  }

  const emailSpans = generateSpans("Email");
  const passwordSpans = generateSpans("Password");

  return (
    <div className="font-Rubik font-light flex h-screen items-center justify-center m-auto overflow-hidden bg-sky-500 text-white">
      <div className="container-form bg-cyan-900 opacity-80 px-[20px] py-[40px] rounded-lg">
        <Header>Please Login</Header>
        <form>
          <FormControl>
            <FormControlInput type="text" required />
            <FormControlLabel>{emailSpans}</FormControlLabel>
          </FormControl>
          <FormControl>
            <FormControlInput type="password" required />
            <FormControlLabel>{passwordSpans}</FormControlLabel>
          </FormControl>

          <Button className="btn-form">Login</Button>
          <p className="text mt-[30px]">
            Don't have an account? <Link href="#">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const Header = styled.h1.attrs({
  className: "text-center text-2xl font-bold mb-[30px]",
})``;

const Link = styled.a.attrs({
  className: "no-underline text-sky-500",
})``;

const FormControl = styled.div.attrs({
  className: "form-control relative mt-[20px] mx-0 mb-[40px] w-[300px]",
})``;

const FormControlInput = styled.input.attrs({
  className: `
      bg-transparent border-0 border-b-2 border-[#fff] 
      block w-full py-[15px] text-[18px] text-[#fff]
      focus:outline-none focus:border-sky-500`,
})``;

const FormControlLabel = styled.label.attrs({
  className: `absolute top-[15px] left-0`,
})``;

const FormControlSpan = styled.span.attrs({
  className: `
      span-form inline-block text-[18px] min-w-[5px]
      transition-[transform] duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]`,
})``;

const Button = styled.button.attrs({
  className: `
      cursor-pointer inline-block w-full bg-sky-500 
      p-[15px] text-[16px] border-0 border-md
      focus:outline-none active:scale-95`,
})``;

export default FormInputWave;
