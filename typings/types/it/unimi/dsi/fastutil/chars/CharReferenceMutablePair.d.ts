import type { CharReferencePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharReferenceMutablePair<V extends unknown> extends Object implements CharReferencePair<V>, Serializable {
    static of(paramarg0: string, paramarg1: Object | null): CharReferenceMutablePair<Object>;
    static of(paramarg0: string, paramarg1: Object | null): CharReferencePair<Object>;
    constructor(arg0: string, arg1: V)
    // private left: string;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharReferencePair<V>;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharReferencePair<V>;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharReferencePair<V>;
    left(arg0: string): CharReferenceMutablePair<V>;
    leftChar(): string;
    right(): V;
    right(arg0: V): CharReferenceMutablePair<V>;
    toString(): string;
}