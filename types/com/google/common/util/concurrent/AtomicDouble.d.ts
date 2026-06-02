import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { DoubleBinaryOperator } from '../../../../../java/util/function/DoubleBinaryOperator.d.ts'
import type { DoubleUnaryOperator } from '../../../../../java/util/function/DoubleUnaryOperator.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class AtomicDouble extends Number {
    constructor()
    constructor(initialValue: number)
    // private value: number;
    accumulateAndGet(x: number, accumulatorFunction: (param0: number, param1: number) => kotlin.Double): number;
    addAndGet(delta: number): number;
    compareAndSet(expect: number, update: number): boolean;
    get(): number;
    getAndAccumulate(x: number, accumulatorFunction: (param0: number, param1: number) => kotlin.Double): number;
    getAndAdd(delta: number): number;
    getAndSet(newValue: number): number;
    getAndUpdate(updateFunction: (param0: number) => kotlin.Double): number;
    lazySet(newValue: number): void;
    // private readObject(s: ObjectInputStream): void;
    set(newValue: number): void;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toString(): string;
    updateAndGet(updateFunction: (param0: number) => kotlin.Double): number;
    weakCompareAndSet(expect: number, update: number): boolean;
    // private writeObject(s: ObjectOutputStream): void;
}