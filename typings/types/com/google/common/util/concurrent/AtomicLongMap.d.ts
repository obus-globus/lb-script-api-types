import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { LongBinaryOperator } from '../../../../../java/util/function/LongBinaryOperator.d.ts'
import type { LongUnaryOperator } from '../../../../../java/util/function/LongUnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AtomicLongMap<K extends unknown> extends Object implements Serializable {
    static create<K extends unknown>(): AtomicLongMap<K>;
    static create<K extends unknown>(paramm: JavaMap<K, number>): AtomicLongMap<K>;
    private constructor(map: JavaMap<K, number>)
    // private asMap: JavaMap<K, number>;
    // private map: JavaMap<K, number>;
    accumulateAndGet(key: K, x: number, accumulatorFunction: (param0: number, param1: number) => number): number;
    addAndGet(key: K, delta: number): number;
    asMap(): JavaMap<K, number>;
    clear(): void;
    containsKey(key: Object): boolean;
    // private createAsMap(): JavaMap<K, number>;
    decrementAndGet(key: K): number;
    get(key: K): number;
    getAndAccumulate(key: K, x: number, accumulatorFunction: (param0: number, param1: number) => number): number;
    getAndAdd(key: K, delta: number): number;
    getAndDecrement(key: K): number;
    getAndIncrement(key: K): number;
    getAndUpdate(key: K, updaterFunction: (param0: number) => number): number;
    incrementAndGet(key: K): number;
    isEmpty(): boolean;
    put(key: K, newValue: number): number;
    putAll(m: JavaMap<K, number>): void;
    putIfAbsent(key: K, newValue: number): number;
    remove(key: K): number;
    remove(key: K, value: number): boolean;
    removeAllZeros(): void;
    removeIfZero(key: K): boolean;
    replace(key: K, expectedOldValue: number, newValue: number): boolean;
    size(): number;
    sum(): number;
    toString(): string;
    updateAndGet(key: K, updaterFunction: (param0: number) => number): number;
}