import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FixedDtoa$UInt128 extends Object {
    constructor(high_bits: number, low_bits: number)
    // private high_bits_: number;
    // private low_bits_: number;
    bitAt(position: number): number;
    divModPowerOf2(power: number): number;
    isZero(): boolean;
    multiply(multiplicand: number): void;
    shift(shift_amount: number): void;
}