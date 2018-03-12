function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
		return 'Nieprawidłowe dane';
	} else if ((a > 0) || (h > 0)) {
		return a*h/2;
	}
}

console.log(getTriangleArea(10, 6))
 
var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(15, 10),
	triangle3Area = getTriangleArea(5, 10);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
