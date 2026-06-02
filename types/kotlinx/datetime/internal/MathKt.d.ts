import type { Object } from '../../../java/lang/Object.d.ts'
import type { Random } from '../../../kotlin/random/Random.d.ts'
import type { DivRemResult } from '../../../kotlinx/datetime/internal/DivRemResult.d.ts'
export class MathKt extends Object {
    static clampToInt(paramarg0: number): number;
    static containsUnsafe(paramarg0: { first: number; last: number; step: number }, paramarg1: number): boolean;
    static getPOWERS_OF_TEN(): number[];
    static getSizeUnsafe(paramarg0: { first: number; last: number; step: number }): number;
    static multiplyAddAndDivide(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static multiplyAndAdd(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static multiplyAndDivide(paramarg0: number, paramarg1: number, paramarg2: number): DivRemResult;
    static randomUnsafe(paramarg0: { first: number; last: number; step: number }, paramarg1: Random): number;
    static randomUnsafeOrNull(paramarg0: { first: number; last: number; step: number }, paramarg1: Random): number;
    static safeMultiplyOrClamp(paramarg0: number, paramarg1: number): number;
}