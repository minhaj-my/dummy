const partial =
  (f, ...fixArgs) =>
  (...args) =>
    f(...fixArgs, ...args);

const compose = (...fns) =>
  fns.reduceRight(
    (a, b) =>
      (...args) =>
        a(b(...args)),
  );

//Dice game code:
const getRandomRoll = () => Math.floor(Math.random() * 6 + 1);
const checkWin = (roll) => roll === 6;

const createMessae = (roll) => {
  return checkWin(roll)
    ? `You rolled a ${roll} You win`
    : `Your rolles a ${roll} You lose`;
};

const displayResult = (element, message) => {
  element.innerText = message;
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const showResults = partial(
    displayResult,
    document.getElementById(resultDisplayId),
  );
  const playGame = compose(getRandomRoll, createMessae, showResults);
  document.getElementById(rollBtnId).addEventListener("click", playGame);
};

createDiceGame("rollbtn", "result");
