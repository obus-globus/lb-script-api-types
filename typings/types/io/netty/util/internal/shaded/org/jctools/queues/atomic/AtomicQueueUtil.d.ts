import type { AtomicLongArray } from '../../../../../../../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { AtomicReferenceArray } from '../../../../../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class AtomicQueueUtil extends Object {
    static allocateLongArray(paramarg0: number): AtomicLongArray;
    static allocateRefArray(paramarg0: number): AtomicReferenceArray<Object>;
    static calcCircularLongElementOffset(paramarg0: number, paramarg1: number): number;
    static calcCircularRefElementOffset(paramarg0: number, paramarg1: number): number;
    static calcLongElementOffset(paramarg0: number): number;
    static calcRefElementOffset(paramarg0: number): number;
    static length(paramarg0: AtomicReferenceArray<Object>): number;
    static lpLongElement(paramarg0: AtomicLongArray, paramarg1: number): number;
    static lpRefElement(paramarg0: AtomicReferenceArray<Object>, paramarg1: number): Object | null;
    static lvLongElement(paramarg0: AtomicLongArray, paramarg1: number): number;
    static lvRefElement(paramarg0: AtomicReferenceArray<Object>, paramarg1: number): Object | null;
    static modifiedCalcCircularRefElementOffset(paramarg0: number, paramarg1: number): number;
    static nextArrayOffset(paramarg0: AtomicReferenceArray<Object>): number;
    static soLongElement(paramarg0: AtomicLongArray, paramarg1: number, paramarg2: number): void;
    static soRefElement(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: Object): void;
    static spLongElement(paramarg0: AtomicLongArray, paramarg1: number, paramarg2: number): void;
    static spRefElement(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: Object | null): void;
    static svRefElement(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: Object | null): void;
    constructor()
}