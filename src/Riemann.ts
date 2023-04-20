import * as math from 'mathjs'
import { Problem } from './types'

export class Riemann {

    //evaluates the expression at the given value
    static #getValue(x: number, expression: string): number {
        const vars = { x: x }
        const parsedExpress = math.parse(expression)
        return parsedExpress.evaluate(vars)
    }

    static rightSum(initProblem: Problem): number {
        const { expression, subintervals, lowerBound, upperBound } = initProblem
        let sum = 0
        const subintervalLength = (upperBound - lowerBound) / subintervals

        //inits x as rightmost value in the first subinterval
        let x = lowerBound + subintervalLength;

        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {

            //adds the value of the function at the right most x value on the subinterval to sum
            sum += this.#getValue(x, expression)

            //increments x to go the next subinterval
            x += subintervalLength
        }

        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength
        return Math.round(sum * 1000) / 1000
    }

    static leftSum(initProblem: Problem): number {
        const { expression, subintervals, lowerBound, upperBound } = initProblem
        const subintervalLength = (upperBound - lowerBound) / subintervals
        let sum = 0

        //inits x as leftmost value in the first subinterval
        let x = lowerBound;

        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {

            //adds the value of the function at the right most x value on the subinterval to sum
            sum += this.#getValue(x, expression)

            //increments x to go the next subinterval
            x += subintervalLength
        }

        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength
        return Math.round(sum * 1000) / 1000
    }

    static midpointSum(initProblem: Problem): number {
        const { expression, subintervals, lowerBound, upperBound } = initProblem
        const subintervalLength = (upperBound - lowerBound) / subintervals
        let sum = 0

        //inits x as leftmost value in the first subinterval
        let subintervalStart = lowerBound;

        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {
            //adds the subinterval length to startsubinterval to get the subinterval end
            let subintervalEnd = subintervalStart + subintervalLength

            /*adds the beginning of the subinterval and the end of the subinterval and divides it by 2 
            to get value in the middle of the subinterval and then gets the value of the function
            at the middle of the subinterval*/
            let x = (subintervalStart + subintervalEnd) / 2
            sum += this.#getValue(x, expression)

            //sets the start of the next subinterval to the end of the last parition
            subintervalStart = subintervalEnd
        }

        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength
        return Math.round(sum * 1000) / 1000
    }

    static trapezoidSum(initProblem: Problem): number {
        const { expression, subintervals, lowerBound, upperBound } = initProblem
        const subintervalLength = (upperBound - lowerBound) / subintervals
        let sum = 0

        //inits x as leftmost value in the first subinterval
        let subintervalStart = lowerBound;

        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {

            //adds the subinterval length to startsubinterval to get the subinterval end
            let subintervalEnd = subintervalStart + subintervalLength

            //gets the function value at each x value of the subinterval
            sum += this.#getValue(subintervalStart, expression) + this.#getValue(subintervalEnd, expression)

            //sets the start of the next subinterval to the end of the last parition
            subintervalStart = subintervalEnd
        }

        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength * 0.5
        return Math.round(sum * 1000) / 1000
    }
}