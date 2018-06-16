// (1)
const add = (a, b) => +a + +b;
add(10, 12);

// (2)
const length = r => 2 * 3.14 * r;
length(5);

// (3)
const discr = (a, b, c) => b * b - 4 * a * c;

// (4)

const square = num => num * num;

// (5)
const sumTo = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
};

// (6)
const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return (fib(n - 1) + fib(n - 2));
};

// (7)
function pow(x, n) {
  if (n > 1) {
    return x * pow(x, n - 1);
  }
  return x;
}

// (8)
const fact = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};

