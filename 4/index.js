function findAreaTriangle(sides) {
  const perimeter = sides.reduce((sum, a) => sum + a) / 2;

  let multiply = sides.reduce((sum, curr, i, arr) => {
    arr[i] = perimeter - curr;
    return arr;
  }, 0).reduce((sum, a) => sum * a);

  return Math.sqrt(multiply * perimeter);
}

let area = findAreaTriangle([4, 5, 6]);

console.log(area);