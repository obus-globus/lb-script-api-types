import type { ReferenceIntPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceIntMutablePair<K extends Object | number | string | boolean> extends Object implements ReferenceIntPair<K>, Serializable {
    static of(paramarg0: Object | null, paramarg1: number): ReferenceIntMutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceIntPair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceIntMutablePair<K>;
    right(arg0: number): ReferenceIntMutablePair<K>;
    right(): number;
    right(arg0: number): ReferenceIntPair<K>;
    right(arg0: number): ReferenceIntPair<K>;
    rightInt(): number;
    second(): number;
    second(arg0: number): ReferenceIntPair<K>;
    second(arg0: number): ReferenceIntPair<K>;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceIntPair<K>;
    value(arg0: number): ReferenceIntPair<K>;
    valueInt(): number;
}