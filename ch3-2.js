function isEven(num) {
	num = Math.abs(num);

	if (num == 1) {
		return false;
	}
	else if (num == 0) {
		return true;
	}
	
	return isEven(num - 2);
}