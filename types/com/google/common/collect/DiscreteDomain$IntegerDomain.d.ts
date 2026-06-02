import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DiscreteDomain$IntegerDomain extends DiscreteDomain<number> implements Serializable {
    static bigIntegers(): DiscreteDomain<BigInteger>;
    static integers(): DiscreteDomain<number>;
    static longs(): DiscreteDomain<number>;
    constructor()
    distance(start: number, end: number): number;
    maxValue(): number;
    minValue(): number;
    next(value: number): number;
    offset(origin: number, distance: number): number;
    previous(value: number): number;
    // private readResolve(): Object;
    toString(): string;
}