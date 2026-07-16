import type { ReferenceDoublePair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceDoubleMutablePair<K extends unknown> extends Object implements ReferenceDoublePair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceDoubleMutablePair<K>;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceDoublePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceDoubleMutablePair<K>;
    right(): number;
    right(arg0: number): ReferenceDoublePair<K>;
    right(arg0: number): ReferenceDoubleMutablePair<K>;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ReferenceDoublePair<K>;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceDoublePair<K>;
    valueDouble(): number;
}