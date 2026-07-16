import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AtomicReference<V extends unknown> extends Object implements Serializable {
    constructor()
    constructor(arg0: V)
    // private value: V;
    accumulateAndGet(arg0: V, arg1: (param0: V, param1: V) => V): V;
    compareAndExchange(arg0: V, arg1: V): V;
    compareAndExchangeAcquire(arg0: V, arg1: V): V;
    compareAndExchangeRelease(arg0: V, arg1: V): V;
    compareAndSet(arg0: V, arg1: V): boolean;
    get(): V;
    getAcquire(): V;
    getAndAccumulate(arg0: V, arg1: (param0: V, param1: V) => V): V;
    getAndSet(arg0: V): V;
    getAndUpdate(arg0: (param0: V) => V): V;
    getOpaque(): V;
    getPlain(): V;
    lazySet(arg0: V): void;
    set(arg0: V): void;
    setOpaque(arg0: V): void;
    setPlain(arg0: V): void;
    setRelease(arg0: V): void;
    toString(): string;
    updateAndGet(arg0: (param0: V) => V): V;
    weakCompareAndSet(arg0: V, arg1: V): boolean;
    weakCompareAndSetAcquire(arg0: V, arg1: V): boolean;
    weakCompareAndSetPlain(arg0: V, arg1: V): boolean;
    weakCompareAndSetRelease(arg0: V, arg1: V): boolean;
    weakCompareAndSetVolatile(arg0: V, arg1: V): boolean;
}