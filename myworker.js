function fibonacci(nbr) {
  var n1 = 0;
  var n2 = 1;
  var sum = 0;

  for (let i = 2; i <= nbr; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return nbr ? n2 : n1;
}
onmessage = (event) => {
  const { data } = event;
  const resolved = fibonacci(data);

  postMessage(resolved);
};
