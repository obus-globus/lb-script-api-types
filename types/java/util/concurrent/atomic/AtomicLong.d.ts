import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { LongBinaryOperator } from '../../../../java/util/function/LongBinaryOperator.d.ts'
import type { LongUnaryOperator } from '../../../../java/util/function/LongUnaryOperator.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class AtomicLong extends Number implements Serializable {
    constructor()
    constructor(arg0: number)
    // private value: number;
    accumulateAndGet(arg0: number, arg1: (param0: number, param1: number) => kotlin.Long): number;
    addAndGet(arg0: number): number;
    compareAndExchange(arg0: number, arg1: number): number;
    compareAndExchangeAcquire(arg0: number, arg1: number): number;
    compareAndExchangeRelease(arg0: number, arg1: number): number;
    compareAndSet(arg0: number, arg1: number): boolean;
    decrementAndGet(): number;
    get(): number;
    getAcquire(): number;
    getAndAccumulate(arg0: number, arg1: (param0: number, param1: number) => kotlin.Long): number;
    getAndAdd(arg0: number): number;
    getAndDecrement(): number;
    getAndIncrement(): number;
    getAndSet(arg0: number): number;
    getAndUpdate(arg0: (param0: number) => kotlin.Long): number;
    getOpaque(): number;
    getPlain(): number;
    incrementAndGet(): number;
    lazySet(arg0: number): void;
    set(arg0: number): void;
    setOpaque(arg0: number): void;
    setPlain(arg0: number): void;
    setRelease(arg0: number): void;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    updateAndGet(arg0: (param0: number) => kotlin.Long): number;
    weakCompareAndSet(arg0: number, arg1: number): boolean;
    weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
    weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
    weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
    weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
}