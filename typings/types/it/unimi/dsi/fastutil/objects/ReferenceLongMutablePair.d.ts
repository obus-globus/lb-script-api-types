import type { ReferenceLongPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceLongMutablePair<K extends unknown> extends Object implements ReferenceLongPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceLongMutablePair<K>;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceLongPair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceLongMutablePair<K>;
    right(): number;
    right(arg0: number): ReferenceLongPair<K>;
    right(arg0: number): ReferenceLongMutablePair<K>;
    rightLong(): number;
    second(): number;
    second(arg0: number): ReferenceLongPair<K>;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceLongPair<K>;
    valueLong(): number;
}