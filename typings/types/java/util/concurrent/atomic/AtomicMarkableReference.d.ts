import type { AtomicMarkableReference$Pair } from '../../../../java/util/concurrent/atomic/AtomicMarkableReference$Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AtomicMarkableReference<V extends unknown> extends Object {
    constructor(arg0: V, arg1: boolean)
    // private pair: AtomicMarkableReference$Pair<V>;
    attemptMark(arg0: V, arg1: boolean): boolean;
    // private casPair(arg0: AtomicMarkableReference$Pair<V>, arg1: AtomicMarkableReference$Pair<V>): boolean;
    compareAndSet(arg0: V, arg1: V, arg2: boolean, arg3: boolean): boolean;
    get(arg0: (Object | null)[]): V;
    getReference(): V;
    isMarked(): boolean;
    set(arg0: V, arg1: boolean): void;
    weakCompareAndSet(arg0: V, arg1: V, arg2: boolean, arg3: boolean): boolean;
}