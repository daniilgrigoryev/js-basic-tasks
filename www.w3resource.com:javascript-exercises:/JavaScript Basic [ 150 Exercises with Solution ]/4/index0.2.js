function findAreaTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}


let area = findAreaTriangle(5, 6, 7);

console.log(area);