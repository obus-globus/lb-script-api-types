import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
export class WeightedObject<T extends unknown> extends Object implements Comparable<WeightedObject<T>> {
    static newWO(paramarg0: Object | null, paramarg1: BigInteger): WeightedObject<Object>;
    private constructor(arg0: T, arg1: BigInteger)
    thing: T;
    readonly weight: BigInteger;
    compareTo(arg0: WeightedObject<T>): number;
    equals(arg0: Object | null): boolean;
    getWeight(): BigInteger;
    hashCode(): number;
}