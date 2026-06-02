import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Bignum extends Object {
    constructor()
    // private bigits_: number[];
    // private exponent_: number;
    // private used_bigits_: number;
    addBignum(other: Bignum): void;
    addUInt64(operand: number): void;
    align(other: Bignum): void;
    assignBignum(other: Bignum): void;
    assignDecimalString(str: string): void;
    assignHexString(value: string): void;
    assignPowerUInt16(base: number, power_exponent: number): void;
    assignUInt16(value: string): void;
    assignUInt64(value: number): void;
    bigitLength(): number;
    bigitOrZero(index: number): number;
    bigitsShiftLeft(shift_amount: number): void;
    clamp(): void;
    divideModuloIntBignum(other: Bignum): string;
    // private ensureCapacity(size: number): void;
    isClamped(): boolean;
    multiplyByPowerOfTen(exponent: number): void;
    multiplyByUInt32(factor: number): void;
    multiplyByUInt64(factor: number): void;
    shiftLeft(shift_amount: number): void;
    square(): void;
    subtractBignum(other: Bignum): void;
    subtractTimes(other: Bignum, factor: number): void;
    times10(): void;
    toHexString(): string;
    toString(): string;
    zero(): void;
}