import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AtomicReferenceArray } from '../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Atomics extends Object {
    static newReference<V extends unknown>(): AtomicReference<V>;
    static newReference<V extends unknown>(paraminitialValue: V): AtomicReference<V>;
    static newReferenceArray<E extends unknown>(paramarray: E[]): AtomicReferenceArray<E>;
    static newReferenceArray<E extends unknown>(paramlength: number): AtomicReferenceArray<E>;
    private constructor()
}