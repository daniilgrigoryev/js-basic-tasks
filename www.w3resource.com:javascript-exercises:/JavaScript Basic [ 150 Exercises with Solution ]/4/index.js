function findAreaTriangle(sides) {
  const perimeter = sides.reduce((sum, a) => sum + a) / 2;
  let multiply = sides.reduce((sum, curr, i, arr) => {
    arr.splice(i, 1, perimeter - curr);
    return arr.reduce((sum, a) => sum * a);;
  }, 0) * perimeter;
  return Math.sqrt(multiply);
}

let area = findAreaTriangle([4, 5, 6]);

console.log(area);