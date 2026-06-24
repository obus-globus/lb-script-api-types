import type { DiscreteDomain$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class DiscreteDomain<C extends Comparable<Object>> extends Object {
    static bigIntegers(): DiscreteDomain<BigInteger>;
    static integers(): DiscreteDomain<number>;
    static longs(): DiscreteDomain<number>;
    constructor()
    private constructor(supportsFastOffset: boolean)
    constructor(arg0: boolean, arg1: DiscreteDomain$1)
    // private supportsFastOffset: boolean;
    distance(start: C, end: C): number;
    maxValue(): C;
    minValue(): C;
    next(value: C): C;
    offset(origin: C, distance: number): C;
    previous(value: C): C;
}