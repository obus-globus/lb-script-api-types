import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class UnsafeRefArrayAccess extends Object {
    static REF_ARRAY_BASE: number;
    static REF_ELEMENT_SHIFT: number;
    static allocateRefArray<E extends unknown>(paramarg0: number): E[];
    static calcCircularRefElementOffset(paramarg0: number, paramarg1: number): number;
    static calcRefElementOffset(paramarg0: number): number;
    static lpRefElement<E extends unknown>(paramarg0: E[], paramarg1: number): E;
    static lvRefElement<E extends unknown>(paramarg0: E[], paramarg1: number): E;
    static soRefElement<E extends unknown>(paramarg0: E[], paramarg1: number, paramarg2: E): void;
    static spRefElement<E extends unknown>(paramarg0: E[], paramarg1: number, paramarg2: E): void;
    constructor()
}