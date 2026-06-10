import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Mutable } from '../../../../../org/apache/commons/lang3/mutable/Mutable.d.ts'
export class MutableInt extends Number implements Comparable<MutableInt>, Mutable<Number> {
    constructor()
    constructor(arg0: number)
    constructor(arg0: Number)
    constructor(arg0: string)
    readonly value: number;
    add(arg0: number): void;
    add(arg0: Number): void;
    addAndGet(arg0: number): number;
    addAndGet(arg0: Number): number;
    compareTo(arg0: MutableInt): number;
    decrement(): void;
    decrementAndGet(): number;
    equals(arg0: Object | null): boolean;
    get(): Number;
    getAndAdd(arg0: number): number;
    getAndAdd(arg0: Number): number;
    getAndDecrement(): number;
    getAndIncrement(): number;
    getValue(): number;
    hashCode(): number;
    increment(): void;
    incrementAndGet(): number;
    setValue(arg0: number): void;
    setValue(arg0: Number): void;
    subtract(arg0: number): void;
    subtract(arg0: Number): void;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toInteger(): number;
    toLong(): number;
    toString(): string;
}