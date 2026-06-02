import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Runtime extends Object {
    static HAS_Long_rotateLeft: boolean;
    static HAS_Math_fma: boolean;
    static HAS_doubleToRawLongBits: boolean;
    static HAS_floatToRawIntBits: boolean;
    static doubleToLongBits(paramarg0: number): number;
    static equals(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static equals(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static floatToIntBits(paramarg0: number): number;
    static format(paramarg0: number, paramarg1: NumberFormat): string;
    static formatNumbers(paramarg0: string): string;
    private constructor()
}