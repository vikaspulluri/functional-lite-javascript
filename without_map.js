function transform(arr,fn){
	let arr2 = [];
	for(let i=0;i<arr.length;i++){
		arr2[i] = fn(arr[i]);
	}
	return arr2;
}

function doubleIt(x){
	return x * 2;
}

transform([1,2,3,4,5], doubleIt(x));