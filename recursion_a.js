function mult(...args){
	if(args.length <= 2) return args[0] * args[1];
	return args[0] + mult(...args.slice(1));
}

mult(1,2,4);
mult(1,3,4,5);

function mult2(){
	let args = [].slice().call(arguments);
	if(args.length <= 2) return args[0] * args[1];
	return args[0] * mult2(null,args.slice(1));
}