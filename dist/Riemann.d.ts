import { Problem } from './types';
export declare class Riemann {
    #private;
    static rightSum(initProblem: Problem): number;
    static leftSum(initProblem: Problem): number;
    static midpointSum(initProblem: Problem): number;
    static trapezoidSum(initProblem: Problem): number;
}
