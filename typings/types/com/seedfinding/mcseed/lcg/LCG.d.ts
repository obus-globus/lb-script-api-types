import type { Object } from '../../../../java/lang/Object.d.ts'
export class LCG extends Object {
    static BORLAND_C: LCG;
    static CC65_M23: LCG;
    static CC65_M31: LCG;
    static GLIB_C: LCG;
    static JAVA: LCG;
    static JAVA_UNIQUIFIER_NEW: LCG;
    static JAVA_UNIQUIFIER_OLD: LCG;
    static MINSTD_RAND0_C: LCG;
    static MINSTD_RAND_C: LCG;
    static MMIX: LCG;
    static MS_VISUAL_C: LCG;
    static NEWLIB_C: LCG;
    static NUMERICAL_RECIPES: LCG;
    static OPEN_VMS: LCG;
    static PASCAL: LCG;
    static RANDU: LCG;
    static RTL_UNIFORM: LCG;
    static VISUAL_BASIC: LCG;
    static XKCD: LCG;
    static combine(...paramarg0: LCG[]): LCG;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    addend: number;
    // private isPowerOf2: boolean;
    modulus: number;
    multiplier: number;
    // private trailingZeros: number;
    combine(arg0: LCG): LCG;
    combine(arg0: number): LCG;
    distance(arg0: number, arg1: number): number;
    equals(arg0: Object | null): boolean;
    getModTrailingZeroes(): number;
    hashCode(): number;
    invert(): LCG;
    isModPowerOf2(): boolean;
    isMultiplicative(): boolean;
    mod(arg0: number): number;
    nextSeed(arg0: number): number;
    toPrettyString(): string;
    toString(): string;
}