import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class UnsafeLongArrayAccess extends Object {
    static LONG_ARRAY_BASE: number;
    static LONG_ELEMENT_SHIFT: number;
    static allocateLongArray(paramarg0: number): number[];
    static calcCircularLongElementOffset(paramarg0: number, paramarg1: number): number;
    static calcLongElementOffset(paramarg0: number): number;
    static lpLongElement(paramarg0: number[], paramarg1: number): number;
    static lvLongElement(paramarg0: number[], paramarg1: number): number;
    static soLongElement(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static spLongElement(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    constructor()
}