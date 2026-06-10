import type { Class } from '../../../../java/lang/Class.d.ts'
import type { LongBinaryOperator } from '../../../../java/util/function/LongBinaryOperator.d.ts'
import type { LongUnaryOperator } from '../../../../java/util/function/LongUnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AtomicLongFieldUpdater<T extends Object | number | string | boolean> extends Object {
    static newUpdater(paramarg0: Class<Object>, paramarg1: string): AtomicLongFieldUpdater<Object>;
    constructor()
    accumulateAndGet(arg0: T, arg1: number, arg2: (param0: number, param1: number) => number): number;
    addAndGet(arg0: T, arg1: number): number;
    compareAndSet(arg0: T, arg1: number, arg2: number): boolean;
    decrementAndGet(arg0: T): number;
    get(arg0: T): number;
    getAndAccumulate(arg0: T, arg1: number, arg2: (param0: number, param1: number) => number): number;
    getAndAdd(arg0: T, arg1: number): number;
    getAndDecrement(arg0: T): number;
    getAndIncrement(arg0: T): number;
    getAndSet(arg0: T, arg1: number): number;
    getAndUpdate(arg0: T, arg1: (param0: number) => number): number;
    incrementAndGet(arg0: T): number;
    lazySet(arg0: T, arg1: number): void;
    set(arg0: T, arg1: number): void;
    updateAndGet(arg0: T, arg1: (param0: number) => number): number;
    weakCompareAndSet(arg0: T, arg1: number, arg2: number): boolean;
}