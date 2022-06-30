import styled from "styled-components";

const SOUNDS = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const SoundBox = styled.button.attrs({
  className: `
    btn-sound-board bg-indigo-600 rounded-lg 
    border-none text-white m-4 px-8 py-4 cursor-pointer 
    focus:outline-none hover:opacity-90`,
})``;

const SoundBoard = () => {
  const buttons = SOUNDS.map((sound) => (
    <SoundBox onClick={() => handleClickSound(sound)}>{sound}</SoundBox>
  ));

  function handleClickSound(sound) {
    stopSounds();
    document.getElementById(sound).play();
  }

  function stopSounds() {
    SOUNDS.forEach((sound) => {
      const song = document.getElementById(sound);
      song.pause();
      song.currentTime = 0;
    });
  }

  return (
    <div className="font-Rubik font-light flex flex-wrap h-screen text-center items-center justify-center m-auto text-2xl sm:text-3xl md:text-4xl overflow-hidden">
      <audio id="applause" src="sounds/applause.mp3"></audio>
      <audio id="boo" src="sounds/boo.mp3"></audio>
      <audio id="gasp" src="sounds/gasp.mp3"></audio>
      <audio id="tada" src="sounds/tada.mp3"></audio>
      <audio id="victory" src="sounds/victory.mp3"></audio>
      <audio id="wrong" src="sounds/wrong.mp3"></audio>
      <div id="buttons">{buttons}</div>
    </div>
  );
};

export default SoundBoard;
