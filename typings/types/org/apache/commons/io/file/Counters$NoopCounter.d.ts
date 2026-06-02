import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$Counter } from '../../../../../org/apache/commons/io/file/Counters$Counter.d.ts'
export class Counters$NoopCounter extends Object implements Counters$Counter {
    private constructor()
    add(arg0: number): void;
    get(): number;
    getBigInteger(): BigInteger;
    getLong(): number;
    increment(): void;
    reset(): void;
    toString(): string;
}