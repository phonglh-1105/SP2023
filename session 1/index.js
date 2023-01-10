const team1 = [
  "Neuer",
  "Lewandowski",
  "Gnarby",
  "Hummels",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Coman",
  "Muller",
  "Gnarby",
];
const team2 = [
  "Ulreich",
  "Hernandez",
  "Davies",
  "Lewandowski",
  "Hummels",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Coman",
  "Muller",
  "Gnarby",
];

const [gk, ...fieldPlayers] = team1;
console.log(gk, fieldPlayers);
const allPlayers = [...team1, ...team2];

// const game = {
//   team1: "Bayern Munich",
//   team2: "Lewandowski",
//   players: allPlayers,
//   odds: {
//     team1: 1.33,
//     draw: 3.25,
//     team2: 6.5,
//   },
// };
// const players1Final = [...game.players, "Thiago", "Coutinho", "Perisic"];

// const { a, x: draw, b } = game.odds;

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// // Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà không sử dụng if/else hoặc toán tử 3 ngôi.
// // const printWinner = function (team1, team2, odds) {
// //   const teamStr = odds.team1 < odds.team2 ? `${team1} win` : `${team2} win`;
// //   console.log(teamStr);
// // };
// printWinner = (team1, team2, odds) => {
//   const teamStr = odds.team1 < odds.team2 ? `${team1} win` : `${team2} win`;
//   console.log(teamStr);
// };

// printWinner(game.team1, game.team2, game.odds);
// const test = []: game.odds
console.log(test);
// const printWinner = function (team1, team2, odds) {
