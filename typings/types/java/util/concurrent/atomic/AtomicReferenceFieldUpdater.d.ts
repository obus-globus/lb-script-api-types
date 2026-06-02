import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AtomicReferenceFieldUpdater<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    static newUpdater(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: string): AtomicReferenceFieldUpdater<Object, Object>;
    constructor()
    accumulateAndGet(arg0: T, arg1: V, arg2: (param0: V, param1: Object | null) => unknown): V;
    compareAndSet(arg0: T, arg1: V, arg2: V): boolean;
    get(arg0: T): V;
    getAndAccumulate(arg0: T, arg1: V, arg2: (param0: V, param1: Object | null) => unknown): V;
    getAndSet(arg0: T, arg1: V): V;
    getAndUpdate(arg0: T, arg1: (param0: V) => unknown): V;
    lazySet(arg0: T, arg1: V): void;
    set(arg0: T, arg1: V): void;
    updateAndGet(arg0: T, arg1: (param0: V) => unknown): V;
    weakCompareAndSet(arg0: T, arg1: V, arg2: V): boolean;
}