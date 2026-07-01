import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$Counter } from '../../../../../org/apache/commons/io/file/Counters$Counter.d.ts'
export class Counters$BigIntegerCounter extends Object implements Counters$Counter {
    constructor(arg0: any)
    // private value: BigInteger;
    add(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(): number;
    getBigInteger(): BigInteger;
    getLong(): number;
    hashCode(): number;
    increment(): void;
    reset(): void;
    toString(): string;
}