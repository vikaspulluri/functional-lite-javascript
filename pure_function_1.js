function bar(x,y){
	
	var z;

	foo();
	return [y,z];

	function foo(){
		y++;
		z = x * y;
	}
}

bar(20,5); //z = 120

bar(20,5); //z = 120