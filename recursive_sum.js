function sumRecursive(){
	let args = [].slice().call(arguments);
	if(args.length <= 2) return args[0] + args[1];
	return (args[0] + sumRecursive(null,args.slice(1)));
}

sumRecursive(3,4,5); //12

function sumRecur(...args){
	if(args.length <= 2) return args[0] + args[1];
	return args[0] + sumRecur(...args.slice(1));
}

sumRecur(3,4,5); //12. 3,4,5 are arguments