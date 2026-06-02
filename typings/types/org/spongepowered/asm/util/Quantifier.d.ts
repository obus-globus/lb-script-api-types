import type { Object } from '../../../../java/lang/Object.d.ts'
export class Quantifier extends Object {
    static ANY: Quantifier;
    static DEFAULT: Quantifier;
    static NONE: Quantifier;
    static PLUS: Quantifier;
    static SINGLE: Quantifier;
    static parse(paramarg0: string): Quantifier;
    constructor(arg0: number, arg1: number)
    readonly max: number;
    readonly min: number;
    equals(arg0: Object | null): boolean;
    getClampedMax(): number;
    getClampedMin(): number;
    getMax(): number;
    getMin(): number;
    hashCode(): number;
    isDefault(): boolean;
    toString(): string;
}