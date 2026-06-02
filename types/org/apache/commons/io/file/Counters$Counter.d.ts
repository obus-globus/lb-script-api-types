import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Counters$Counter extends Object{
    add(arg0: number): void;
    get(): number;
    getBigInteger(): BigInteger;
    getLong(): number;
    increment(): void;
    reset(): void;
}