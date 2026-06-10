import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { LongBinaryOperator } from '../../../../java/util/function/LongBinaryOperator.d.ts'
import type { LongUnaryOperator } from '../../../../java/util/function/LongUnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AtomicLongArray extends Object implements Serializable {
    constructor(arg0: number)
    constructor(arg0: number[])
    // private array: number[];
    accumulateAndGet(arg0: number, arg1: number, arg2: (param0: number, param1: number) => number): number;
    addAndGet(arg0: number, arg1: number): number;
    compareAndExchange(arg0: number, arg1: number, arg2: number): number;
    compareAndExchangeAcquire(arg0: number, arg1: number, arg2: number): number;
    compareAndExchangeRelease(arg0: number, arg1: number, arg2: number): number;
    compareAndSet(arg0: number, arg1: number, arg2: number): boolean;
    decrementAndGet(arg0: number): number;
    get(arg0: number): number;
    getAcquire(arg0: number): number;
    getAndAccumulate(arg0: number, arg1: number, arg2: (param0: number, param1: number) => number): number;
    getAndAdd(arg0: number, arg1: number): number;
    getAndDecrement(arg0: number): number;
    getAndIncrement(arg0: number): number;
    getAndSet(arg0: number, arg1: number): number;
    getAndUpdate(arg0: number, arg1: (param0: number) => number): number;
    getOpaque(arg0: number): number;
    getPlain(arg0: number): number;
    incrementAndGet(arg0: number): number;
    lazySet(arg0: number, arg1: number): void;
    length(): number;
    set(arg0: number, arg1: number): void;
    setOpaque(arg0: number, arg1: number): void;
    setPlain(arg0: number, arg1: number): void;
    setRelease(arg0: number, arg1: number): void;
    toString(): string;
    updateAndGet(arg0: number, arg1: (param0: number) => number): number;
    weakCompareAndSet(arg0: number, arg1: number, arg2: number): boolean;
    weakCompareAndSetAcquire(arg0: number, arg1: number, arg2: number): boolean;
    weakCompareAndSetPlain(arg0: number, arg1: number, arg2: number): boolean;
    weakCompareAndSetRelease(arg0: number, arg1: number, arg2: number): boolean;
    weakCompareAndSetVolatile(arg0: number, arg1: number, arg2: number): boolean;
}