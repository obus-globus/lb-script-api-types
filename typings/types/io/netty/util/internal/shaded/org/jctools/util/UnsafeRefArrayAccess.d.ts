import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class UnsafeRefArrayAccess extends Object {
    static REF_ARRAY_BASE: number;
    static REF_ELEMENT_SHIFT: number;
    static allocateRefArray(paramarg0: number): Object | null;
    static calcCircularRefElementOffset(paramarg0: number, paramarg1: number): number;
    static calcRefElementOffset(paramarg0: number): number;
    static lpRefElement(paramarg0: Object | null, paramarg1: number): Object | null;
    static lvRefElement(paramarg0: Object | null, paramarg1: number): Object | null;
    static soRefElement(paramarg0: Object | null, paramarg1: number, paramarg2: Object | null): void;
    static spRefElement(paramarg0: Object | null, paramarg1: number, paramarg2: Object | null): void;
    constructor()
}