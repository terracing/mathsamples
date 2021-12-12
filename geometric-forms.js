/* 
 * Square
*/
console.group("Square");

const sideSquare = 5;

function perimeterSquare(sideSquare) {
    return sideSquare * 4;
}
console.log(`Perimeter of the square is ${ perimeterSquare(sideSquare) } cm`);

function areaSquare(sideSquare) {
    return sideSquare * sideSquare;
}
console.log(`Area of the square is ${ areaSquare(sideSquare) } cm^2`);

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

function perimeterTriangle(sideOneTriangle,sideTwoTriangle,sideThreeTriangle) {
    return sideOneTriangle + sideTwoTriangle + sideThreeTriangle;
}
console.log(`Perimeter of the triangle is ${ perimeterTriangle(sideOneTriangle,sideTwoTriangle,sideThreeTriangle) } cm`);

function areaTriangle(sideThreeTriangle,heightTriangle) {
    return (sideThreeTriangle * heightTriangle) / 2;
}
console.log(`Area of the square is ${ areaTriangle(sideThreeTriangle,heightTriangle) } cm^2`);

console.groupEnd();
/*
 * Circle
*/
console.group("Circle");

const pi = Math.PI;
const radiusCircle = 6;

function diameterCircle(radiusCircle) {
    return radiusCircle * 2;
}
console.log(`Diameter of circle is ${ diameterCircle(radiusCircle) } cm`);

const diameterCircleValue = diameterCircle(radiusCircle);
function circunferenceCircle(diameterCircleValue,pi) {
    return diameterCircleValue * pi;
}
console.log(`Circunference of the circle is ${ circunferenceCircle(diameterCircleValue,pi) } cm`);

function areaCircle(radiusCircle,pi) {
    return (radiusCircle * radiusCircle) * pi;
}
console.log(`Area of circle is ${ areaCircle(radiusCircle,pi) } cm^2`);

console.groupEnd();