// (1)
var add = (a,b) => {
	return +a + +b;
};
add (10,12);

// (2)
var length = (r) => {
	return 2 * 3.14 * r;
};
length (5);

// (3)
var discr = (a,b,c) => {
	return b * b - 4 * a * c
};

// (4)

var square = (num) => {
	return num * num
};

// (5)
const sumTo = (n) => {
if (n===1) {
  return 1;
} else {
return n + sumTo (n - 1)
}
}

// (6)
const fib = (n) => {
if (n<2) {
  return n;
} else {
return (fib(n-1) + fib(n-2))
}
};

// (7)
function pow(x, n) {
  if (n > 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
};

// (8)
const fact = (n) => {
if (n===0) {
  return 1;
} else {
return n * fact (n - 1)
}
}


