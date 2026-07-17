import type { ReferenceIntPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ReferenceIntPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceIntMutablePair<K extends unknown> extends Object implements ReferenceIntPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceIntMutablePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceIntMutablePair<K>;
    right(): number;
    right(arg0: number): ReferenceIntPair<K>;
    right(arg0: number): ReferenceIntMutablePair<K>;
    rightInt(): number;
    second(): number;
    second(arg0: number): ReferenceIntPair<K>;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceIntPair<K>;
    valueInt(): number;
}