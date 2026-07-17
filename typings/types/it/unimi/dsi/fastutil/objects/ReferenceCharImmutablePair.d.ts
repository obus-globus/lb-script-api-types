import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ReferenceCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceCharImmutablePair<K extends unknown> extends Object implements ReferenceCharPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: string): ReferenceCharImmutablePair<K>;
    constructor(arg0: K, arg1: string)
    // private left: K;
    // private right: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, string>;
    right(): string;
    right(arg0: string): ReferenceCharPair<K>;
    rightChar(): string;
    second(): string;
    second(arg0: string): ReferenceCharPair<K>;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): ReferenceCharPair<K>;
    valueChar(): string;
}