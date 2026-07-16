import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AtomicReferenceArray } from '../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Atomics extends Object {
    static newReference(): AtomicReference<Object>;
    static newReference(paraminitialValue: Object | null): AtomicReference<Object>;
    static newReferenceArray(paramarray: (Object | null)[]): AtomicReferenceArray<Object>;
    static newReferenceArray(paramlength: number): AtomicReferenceArray<Object>;
    private constructor()
}