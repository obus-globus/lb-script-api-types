import type { ReferenceCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceCharMutablePair<K extends unknown> extends Object implements ReferenceCharPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: string): ReferenceCharMutablePair<K>;
    constructor(arg0: K, arg1: string)
    // private left: K;
    // private right: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceCharMutablePair<K>;
    right(): string;
    right(arg0: string): ReferenceCharPair<K>;
    right(arg0: string): ReferenceCharMutablePair<K>;
    rightChar(): string;
    second(): string;
    second(arg0: string): ReferenceCharPair<K>;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): ReferenceCharPair<K>;
    valueChar(): string;
}