# Riemann-Sum-Calculator
A Javascript utility class for calculating riemann sums with right sum, left sum, midpoint sum, and trapezoid sum methods.

## Installation
```javascript
npm i riemann-sum-calculator
```

## Features
Allows user to calculate the right, left, midpoint or trapezoid riemann sum for any function, algebraic or transcendental functions.

## Setup
```javascript
import { Riemann } from "riemann-sum-calculator"
```

## Usage
The Riemann sum utitlity class has four methods. One for each method of calculating a riemann sum: `Riemann.rightSum()`, `Riemann.leftSum()`, `Riemann.midpointSum()`, `Riemann.trapezoidSum()`. 

Each method accepts an object with properties `expression: string`, the function,  `subintervals: number`, the number of subintervals, `lowerBound: number`, `upperBound: number`, the bounds of the Riemann sum.


## Example
```javascript
import { Riemann } from "riemann-sum-calculator"

const problem = {
    expression: "sin(x)",
    subintervals: 6,
    lowerBound: 0,
    upperBound: Math.PI / 2
}

console.log(Riemann.trapezoidSum(problem))
//outputs 0.994
```