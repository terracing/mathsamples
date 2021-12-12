/* 
 * Square
*/
function getSideSquareValue() {
    const input = document.getElementById("side-square");
    return input.value;
}

function perimeterSquare(sideSquare) {
    return sideSquare * 4;
}

function areaSquare(sideSquare) {
    return sideSquare * sideSquare;
}

function calculatePerimeterSquare() {
    alert(`Perimeter of the square is ${ perimeterSquare(getSideSquareValue()) } cm`);
}

function calculateAreaSquare() {
        alert(`Area of the square is ${ areaSquare(getSideSquareValue()) } cm^2`);
}

/*
 * Triangle
*/
function getSidesTriangleValue() {
    const inputOne = document.getElementById("side-one-triangle");
    const sideOneTriangle = inputOne.value;
    const inputTwo = document.getElementById("side-two-triangle");
    const sideTwoTriangle = inputTwo.value;
    const inputThree = document.getElementById("side-three-triangle");
    const sideThreeTriangle = inputThree.value;
    return { sideOneTriangle, sideTwoTriangle, sideThreeTriangle };
}

function perimeterTriangle(sideOneTriangle,sideTwoTriangle,sideThreeTriangle) {
    return parseInt(sideOneTriangle) + parseInt(sideTwoTriangle) + parseInt(sideThreeTriangle);
}

function areaTriangle(sideOneTriangle,sideTwoTriangle,sideThreeTriangle) {
    const sVaule = perimeterTriangle(sideOneTriangle,sideTwoTriangle,sideThreeTriangle) / 2;
    return Math.sqrt(sVaule*(sVaule-sideOneTriangle)*(sVaule-sideTwoTriangle)*(sVaule-sideThreeTriangle)).toFixed(2);
}

function calculatePerimeterTriangle() {
    const sides = getSidesTriangleValue();
    alert(`Perimeter of the triangle is ${ perimeterTriangle(sides.sideOneTriangle,sides.sideTwoTriangle,sides.sideThreeTriangle) } cm`);
}

function calculateAreaTriangle() {
    const sides = getSidesTriangleValue();
    alert(`Area of the square is ${ areaTriangle(sides.sideOneTriangle,sides.sideTwoTriangle,sides.sideThreeTriangle) } cm^2`);
}

/*
 * Circle
*/
const pi = Math.PI;

function getRadiusCircleValue() {
    const input = document.getElementById("radio");
    return input.value;
}

function diameterCircle(radiusCircle) {
    return radiusCircle * 2;
}

function circunferenceCircle(diameterCircleValue,pi) {
    return (diameterCircleValue * pi).toFixed(2);
}

function areaCircle(radiusCircle,pi) {
    return ((radiusCircle * radiusCircle) * pi).toFixed(2);
}

function calculateCircunferenceCircle() {
    const radiusCircle = getRadiusCircleValue();
    const diameterCircleValue = diameterCircle(radiusCircle);
    alert (`Circunference of the circle is ${ circunferenceCircle(diameterCircleValue,pi) } cm`);
}

function calculateAreaCircle() {
    const radiusCircle = getRadiusCircleValue();
    alert (`Area of circle is ${ areaCircle(radiusCircle,pi) } cm^2`);
}
