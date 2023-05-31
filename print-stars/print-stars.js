const printStarsV1 = (levels) => {
  const star = "*";
  for (let i = 1; i <= levels; i++) {
    console.log(star.repeat(i));
  }
};

const printStarsV2 = (levels) => {
  const star = "*";
  let startsThree = "";
  for (let i = 1; i <= levels; i++) {
    startsThree = startsThree + `${star.repeat(i)}\n`;
  }
  console.log(startsThree);
};

printStarsV1(15);
console.log("\n");
printStarsV2(15);
