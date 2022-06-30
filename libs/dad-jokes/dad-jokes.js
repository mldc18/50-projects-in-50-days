async function fetchRandomJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = response.json();

  return data;
}

export default fetchRandomJoke;
