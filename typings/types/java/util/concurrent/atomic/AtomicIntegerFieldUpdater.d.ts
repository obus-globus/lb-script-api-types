import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IntBinaryOperator } from '../../../../java/util/function/IntBinaryOperator.d.ts'
import type { IntUnaryOperator } from '../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AtomicIntegerFieldUpdater<T extends Object | number | string | boolean> extends Object {
    static newUpdater(paramarg0: Class<Object>, paramarg1: string): AtomicIntegerFieldUpdater<Object>;
    constructor()
    accumulateAndGet(arg0: T, arg1: number, arg2: (param0: number, param1: number) => kotlin.Int): number;
    addAndGet(arg0: T, arg1: number): number;
    compareAndSet(arg0: T, arg1: number, arg2: number): boolean;
    decrementAndGet(arg0: T): number;
    get(arg0: T): number;
    getAndAccumulate(arg0: T, arg1: number, arg2: (param0: number, param1: number) => kotlin.Int): number;
    getAndAdd(arg0: T, arg1: number): number;
    getAndDecrement(arg0: T): number;
    getAndIncrement(arg0: T): number;
    getAndSet(arg0: T, arg1: number): number;
    getAndUpdate(arg0: T, arg1: (param0: number) => kotlin.Int): number;
    incrementAndGet(arg0: T): number;
    lazySet(arg0: T, arg1: number): void;
    set(arg0: T, arg1: number): void;
    updateAndGet(arg0: T, arg1: (param0: number) => kotlin.Int): number;
    weakCompareAndSet(arg0: T, arg1: number, arg2: number): boolean;
}