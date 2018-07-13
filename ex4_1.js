function foo(x){
	return function(){
		return x;
	}
}
function add(x,y){
	return x + y;
}
function add2(fn1,fn2){
	return add(fn1(),fn2());
}
add2(foo(10),foo(25)); //35

function addn(...arr){
	let sum = 0;
	for(let i=0;i<arr.length;i++){
		sum = add2(foo(arr[i]), foo(sum));
	}
}

function addnAlternative(...arr){
	arr.slice(1)
		.reduce(function(acc,item){
			return function(){
				return add2(acc,item);
			}
		},arr[0])();
}

addn(foo(10),foo(5),foo(4)); //25