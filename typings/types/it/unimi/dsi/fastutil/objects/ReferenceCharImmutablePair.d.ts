import type { ReferenceCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceCharImmutablePair<K extends Object | number | string | boolean> extends Object implements ReferenceCharPair<K>, Serializable {
    static of(paramarg0: Object | null, paramarg1: string): ReferenceCharImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: string): ReferenceCharPair<Object>;
    constructor(arg0: K, arg1: string)
    // private left: K;
    // private right: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    right(): string;
    right(arg0: string): ReferenceCharPair<K>;
    right(arg0: string): ReferenceCharPair<K>;
    rightChar(): string;
    second(): string;
    second(arg0: string): ReferenceCharPair<K>;
    second(arg0: string): ReferenceCharPair<K>;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): ReferenceCharPair<K>;
    value(arg0: string): ReferenceCharPair<K>;
    valueChar(): string;
}