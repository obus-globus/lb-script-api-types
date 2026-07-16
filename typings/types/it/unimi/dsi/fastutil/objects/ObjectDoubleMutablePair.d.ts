import type { ObjectDoublePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectDoubleMutablePair<K extends unknown> extends Object implements ObjectDoublePair<K>, Serializable {
    static lexComparator<K extends unknown>(): (param0: ObjectDoublePair<K>, param1: ObjectDoublePair<K>) => number;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectDoubleMutablePair<K>;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectDoublePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectDoubleMutablePair<K>;
    right(): number;
    right(arg0: number): ObjectDoublePair<K>;
    right(arg0: number): ObjectDoubleMutablePair<K>;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ObjectDoublePair<K>;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectDoublePair<K>;
    valueDouble(): number;
}