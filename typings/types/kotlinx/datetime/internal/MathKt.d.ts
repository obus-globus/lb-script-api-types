import type { Object } from '../../../java/lang/Object.d.ts'
import type { Random } from '../../../kotlin/random/Random.d.ts'
import type { DivRemResult } from '../../../kotlinx/datetime/internal/DivRemResult.d.ts'
export class MathKt extends Object {
    static clampToInt(self: number): number;
    static containsUnsafe(self: { first: number; last: number; step: number }, value: number): boolean;
    static getPOWERS_OF_TEN(): number[];
    static getSizeUnsafe(paramarg0: { first: number; last: number; step: number }): number;
    static multiplyAddAndDivide(d: number, n: number, r: number, m: number): number;
    static multiplyAndAdd(d: number, n: number, r: number): number;
    static multiplyAndDivide(a: number, b: number, c: number): DivRemResult;
    static randomUnsafe(self: { first: number; last: number; step: number }, random: Random): number;
    static randomUnsafeOrNull(self: { first: number; last: number; step: number }, random: Random): number | null;
    static safeMultiplyOrClamp(a: number, b: number): number;
}