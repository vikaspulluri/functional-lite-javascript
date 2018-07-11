//Create a pure function to this problem

function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;

foo(20);

console.log(z); //120

foo(20);

console.log(z); //140