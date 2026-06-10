import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { AtomicLongArray } from '../../../../../java/util/concurrent/atomic/AtomicLongArray.d.ts'
import type { DoubleBinaryOperator } from '../../../../../java/util/function/DoubleBinaryOperator.d.ts'
import type { DoubleUnaryOperator } from '../../../../../java/util/function/DoubleUnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AtomicDoubleArray extends Object implements Serializable {
    constructor(array: number[])
    constructor(length: number)
    // private longs: AtomicLongArray;
    accumulateAndGet(i: number, x: number, accumulatorFunction: (param0: number, param1: number) => number): number;
    addAndGet(i: number, delta: number): number;
    compareAndSet(i: number, expect: number, update: number): boolean;
    get(i: number): number;
    getAndAccumulate(i: number, x: number, accumulatorFunction: (param0: number, param1: number) => number): number;
    getAndAdd(i: number, delta: number): number;
    getAndSet(i: number, newValue: number): number;
    getAndUpdate(i: number, updaterFunction: (param0: number) => number): number;
    lazySet(i: number, newValue: number): void;
    length(): number;
    // private readObject(s: ObjectInputStream): void;
    set(i: number, newValue: number): void;
    toString(): string;
    updateAndGet(i: number, updaterFunction: (param0: number) => number): number;
    weakCompareAndSet(i: number, expect: number, update: number): boolean;
    // private writeObject(s: ObjectOutputStream): void;
}