function bar(x,y){
	
	var z;

	foo();
	return [y,z];

	function foo(){
		y++;
		z = x * y;
	}
}

bar(20,5); //[6,120]

bar(20,5); //[6,120]