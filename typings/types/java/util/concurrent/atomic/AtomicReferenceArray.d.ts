import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AtomicReferenceArray<E extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(arg0: E[])
    constructor(arg0: number)
    // private array: Object[];
    accumulateAndGet(arg0: number, arg1: E, arg2: (param0: E, param1: Object | null) => Object | null): E;
    compareAndExchange(arg0: number, arg1: E, arg2: E): E;
    compareAndExchangeAcquire(arg0: number, arg1: E, arg2: E): E;
    compareAndExchangeRelease(arg0: number, arg1: E, arg2: E): E;
    compareAndSet(arg0: number, arg1: E, arg2: E): boolean;
    get(arg0: number): E;
    getAcquire(arg0: number): E;
    getAndAccumulate(arg0: number, arg1: E, arg2: (param0: E, param1: Object | null) => Object | null): E;
    getAndSet(arg0: number, arg1: E): E;
    getAndUpdate(arg0: number, arg1: (param0: E) => Object | null): E;
    getOpaque(arg0: number): E;
    getPlain(arg0: number): E;
    lazySet(arg0: number, arg1: E): void;
    length(): number;
    // private readObject(arg0: ObjectInputStream): void;
    set(arg0: number, arg1: E): void;
    setOpaque(arg0: number, arg1: E): void;
    setPlain(arg0: number, arg1: E): void;
    setRelease(arg0: number, arg1: E): void;
    toString(): string;
    updateAndGet(arg0: number, arg1: (param0: E) => Object | null): E;
    weakCompareAndSet(arg0: number, arg1: E, arg2: E): boolean;
    weakCompareAndSetAcquire(arg0: number, arg1: E, arg2: E): boolean;
    weakCompareAndSetPlain(arg0: number, arg1: E, arg2: E): boolean;
    weakCompareAndSetRelease(arg0: number, arg1: E, arg2: E): boolean;
    weakCompareAndSetVolatile(arg0: number, arg1: E, arg2: E): boolean;
}