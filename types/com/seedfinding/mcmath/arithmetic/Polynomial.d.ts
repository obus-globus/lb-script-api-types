import type { Rational } from '../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Polynomial extends Object {
    constructor(arg0: Rational, arg1: number)
    constructor(arg0: Rational[])
    readonly coefficients: Rational[];
    degree: number;
    // private derivative: Polynomial;
    add(arg0: Polynomial): Polynomial;
    compose(arg0: Polynomial): Polynomial;
    computeDegree(): void;
    differentiate(): Polynomial;
    equals(arg0: Object | null): boolean;
    evaluate(arg0: Rational): Rational;
    getCoefficient(arg0: number): Rational;
    getCoefficients(): Rational[];
    getDegree(): number;
    hashCode(): number;
    multiply(arg0: Polynomial): Polynomial;
    toString(): string;
}