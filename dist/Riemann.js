"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Riemann_getValue;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Riemann = void 0;
const math = require("mathjs");
class Riemann {
    static rightSum(initProblem) {
        const { expression, subintervals, lowerBound, upperBound } = initProblem;
        let sum = 0;
        const subintervalLength = (upperBound - lowerBound) / subintervals;
        //inits x as rightmost value in the first subinterval
        let x = lowerBound + subintervalLength;
        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {
            //adds the value of the function at the right most x value on the subinterval to sum
            sum += __classPrivateFieldGet(this, _a, "m", _Riemann_getValue).call(this, x, expression);
            //increments x to go the next subinterval
            x += subintervalLength;
        }
        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength;
        return Math.round(sum * 1000) / 1000;
    }
    static leftSum(initProblem) {
        const { expression, subintervals, lowerBound, upperBound } = initProblem;
        const subintervalLength = (upperBound - lowerBound) / subintervals;
        let sum = 0;
        //inits x as leftmost value in the first subinterval
        let x = lowerBound;
        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {
            //adds the value of the function at the right most x value on the subinterval to sum
            sum += __classPrivateFieldGet(this, _a, "m", _Riemann_getValue).call(this, x, expression);
            //increments x to go the next subinterval
            x += subintervalLength;
        }
        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength;
        return Math.round(sum * 1000) / 1000;
    }
    static midpointSum(initProblem) {
        const { expression, subintervals, lowerBound, upperBound } = initProblem;
        const subintervalLength = (upperBound - lowerBound) / subintervals;
        let sum = 0;
        //inits x as leftmost value in the first subinterval
        let subintervalStart = lowerBound;
        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {
            //adds the subinterval length to startsubinterval to get the subinterval end
            let subintervalEnd = subintervalStart + subintervalLength;
            /*adds the beginning of the subinterval and the end of the subinterval and divides it by 2
            to get value in the middle of the subinterval and then gets the value of the function
            at the middle of the subinterval*/
            let x = (subintervalStart + subintervalEnd) / 2;
            sum += __classPrivateFieldGet(this, _a, "m", _Riemann_getValue).call(this, x, expression);
            //sets the start of the next subinterval to the end of the last parition
            subintervalStart = subintervalEnd;
        }
        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength;
        return Math.round(sum * 1000) / 1000;
    }
    static trapezoidSum(initProblem) {
        const { expression, subintervals, lowerBound, upperBound } = initProblem;
        const subintervalLength = (upperBound - lowerBound) / subintervals;
        let sum = 0;
        //inits x as leftmost value in the first subinterval
        let subintervalStart = lowerBound;
        //runs for the the number of subintervals
        for (let i = 0; i < subintervals; i++) {
            //adds the subinterval length to startsubinterval to get the subinterval end
            let subintervalEnd = subintervalStart + subintervalLength;
            //gets the function value at each x value of the subinterval
            sum += __classPrivateFieldGet(this, _a, "m", _Riemann_getValue).call(this, subintervalStart, expression) + __classPrivateFieldGet(this, _a, "m", _Riemann_getValue).call(this, subintervalEnd, expression);
            //sets the start of the next subinterval to the end of the last parition
            subintervalStart = subintervalEnd;
        }
        //multiplies sum by the subinterval length at the end (algebraic rules) instead of in for loop
        sum *= subintervalLength * 0.5;
        return Math.round(sum * 1000) / 1000;
    }
}
exports.Riemann = Riemann;
_a = Riemann, _Riemann_getValue = function _Riemann_getValue(x, expression) {
    const vars = { x: x };
    const parsedExpress = math.parse(expression);
    return parsedExpress.evaluate(vars);
};
//# sourceMappingURL=Riemann.js.map