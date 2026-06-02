import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DiscreteDomain$BigIntegerDomain extends DiscreteDomain<BigInteger> implements Serializable {
    static bigIntegers(): DiscreteDomain<BigInteger>;
    static integers(): DiscreteDomain<number>;
    static longs(): DiscreteDomain<number>;
    constructor()
    distance(start: BigInteger, end: BigInteger): number;
    next(value: BigInteger): BigInteger;
    offset(origin: BigInteger, distance: number): BigInteger;
    previous(value: BigInteger): BigInteger;
    // private readResolve(): Object;
    toString(): string;
}