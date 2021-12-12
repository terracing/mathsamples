/* 
 * Square
*/
console.group("Square");

const sideSquare = 5;

const perimeterSquare = sideSquare * 4;
console.log(`Perimeter of the square is ${ perimeterSquare } cm`);

const areaSquare = sideSquare * sideSquare;
console.log(`Area of the square is ${ areaSquare } cm^2`);

console.groupEnd();
/*
 * Triangle
*/
console.group("Triangle");

const sideOneTriangle = 6;
const sideTwoTriangle = 6;
const sideThreeTriangle = 4;
const heightTriangle = 5.5;

console.log(`Side One ${ sideOneTriangle } cm, side Two ${ sideTwoTriangle } cm, side Three ${ sideThreeTriangle} cm and Height ${ heightTriangle} cm`);

const perimeterTriangle = sideOneTriangle + sideTwoTriangle + sideThreeTriangle;
console.log(`Perimeter of the triangle is ${ perimeterTriangle } cm`);

const areaTriangle = (sideThreeTriangle * heightTriangle) / 2;
console.log(`Area of the square is ${ areaTriangle } cm^2`);

console.groupEnd();
/*
 * Circle
*/
console.group("Circle");

const pi = Math.PI;
const radiusCircle = 6;
const diameterCircle = radiusCircle * 2;

const circunferenceCircle = diameterCircle * pi;
console.log(`Circunference of teh circle is ${ circunferenceCircle } cm`);

const areaCircle = (radiusCircle * radiusCircle) * pi;
console.log(`Area of circle is ${ areaCircle } cm^2`);

console.groupEnd();