const Base_URL = "https://pokeapi.co/api/v3/pokemon";

// const result = [];
//
// async function getPokemon(num) {
//   const res = await fetch(`${Base_URL}/${num}`);
//   result.push(res);
//   console.log(`REQUEST ${num} FINISHED`);
// }
// for (let i = 1; i < 100; i++) getPokemon(i);

const lotsOfFetchCalls = [
  fetch(`${Base_URL}/1`),
  fetch(`${Base_URL}/2`),
  fetch(`${Base_URL}/3`),
  fetch(`${Base_URL}/4`),
  fetch(`${Base_URL}/5`),
  fetch(`${Base_URL}/6`),
];

Promise.all(lotsOfFetchCalls);
