const s = `  mark     Johansson waffle    80 2
 mark   Johansson blender    200    1
    mark   Johansson knife    10 4
 Nikita    Smith waffle    80    2
      Nikita    Smith    blender    200 1
 Nikita    Smith knife 10 4 `;

const splitedString = s.split(" ").filter((item) => item !== "");
const res = {};

for (let i = 0; i < splitedString.length; i += 5) {
  const firstName = splitedString[i];
  const lastName = splitedString[i + 1];
  const item = splitedString[i + 2];
  const price = parseFloat(splitedString[i + 3]);
  const quantity = parseInt(splitedString[i + 4]);

  const fullName = `${firstName} ${lastName}`;
  if (!res[fullName]) {
    res[fullName] = [];
  }

  res[fullName].push({
    item,
    price,
    quantity,
  });
}

console.log(res);
