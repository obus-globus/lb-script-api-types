import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Combinatorics extends Object {
    static MAX_LONG_FACTORIAL: number;
    static combine(paramarg0: number, paramarg1: number, paramarg2: (param0: number[]) => kotlin.Boolean): void;
    static getBigCombinations(paramarg0: number, paramarg1: number): BigInteger;
    static getBigFactorial(paramarg0: number): BigInteger;
    static getBigPermutations(paramarg0: number, paramarg1: number): BigInteger;
    static getCombinations(paramarg0: number, paramarg1: number): number;
    static getFactorial(paramarg0: number): number;
    static getPermutations(paramarg0: number, paramarg1: number): number;
    static permute(paramarg0: number, paramarg1: number, paramarg2: (param0: number[]) => kotlin.Boolean): void;
    constructor()
}