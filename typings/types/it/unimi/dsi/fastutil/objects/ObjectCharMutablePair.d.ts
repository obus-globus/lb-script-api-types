import type { ObjectCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectCharMutablePair<K extends Object | number | string | boolean> extends Object implements ObjectCharPair<K>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: string): ObjectCharMutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: string): ObjectCharPair<Object>;
    constructor(arg0: K, arg1: string)
    // private left: K;
    // private right: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectCharMutablePair<K>;
    right(): string;
    right(arg0: string): ObjectCharPair<K>;
    right(arg0: string): ObjectCharMutablePair<K>;
    rightChar(): string;
    second(): string;
    second(arg0: string): ObjectCharPair<K>;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): ObjectCharPair<K>;
    valueChar(): string;
}