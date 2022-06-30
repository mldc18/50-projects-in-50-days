import fetchRandomJoke from "../../libs/dad-jokes/dad-jokes";

const getRandomJoke = async (req, res) => {
  try {
    const response = await fetchRandomJoke();
    res.status(200).json({ response });
  } catch (err) {
    res.status(500).json({ message: `Error ${err}` });
  }
};

export default getRandomJoke;
