import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AtomicReferenceFieldUpdater<T extends unknown, V extends unknown> extends Object {
    static newUpdater<U extends unknown, W extends unknown>(paramarg0: Class<U>, paramarg1: Class<W>, paramarg2: string): AtomicReferenceFieldUpdater<U, W>;
    constructor()
    accumulateAndGet(arg0: T, arg1: V, arg2: (param0: V, param1: V) => V): V;
    compareAndSet(arg0: T, arg1: V, arg2: V): boolean;
    get(arg0: T): V;
    getAndAccumulate(arg0: T, arg1: V, arg2: (param0: V, param1: V) => V): V;
    getAndSet(arg0: T, arg1: V): V;
    getAndUpdate(arg0: T, arg1: (param0: V) => V): V;
    lazySet(arg0: T, arg1: V): void;
    set(arg0: T, arg1: V): void;
    updateAndGet(arg0: T, arg1: (param0: V) => V): V;
    weakCompareAndSet(arg0: T, arg1: V, arg2: V): boolean;
}