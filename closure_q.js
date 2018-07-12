//Defind function foo() so that it produces a function which remembers only the first 
//two arguments that were passed to foo(), and always add them together

function foo(x,y){
	return function(){
		return x + y;
	}
}

var add = foo(3,4);

add(); //7
add(); //7