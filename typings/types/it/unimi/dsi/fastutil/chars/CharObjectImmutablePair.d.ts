import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { CharObjectPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharObjectImmutablePair<V extends unknown> extends Object implements CharObjectPair<V>, Serializable {
    static lexComparator<V extends unknown>(): (param0: CharObjectPair<V>, param1: CharObjectPair<V>) => number;
    static of<V extends unknown>(paramarg0: string, paramarg1: V): CharObjectImmutablePair<V>;
    static of<V extends unknown>(paramarg0: string, paramarg1: V): CharObjectPair<V>;
    constructor(arg0: string, arg1: V)
    // private left: string;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharObjectPair<V>;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharObjectPair<V>;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharObjectPair<V>;
    leftChar(): string;
    right(): V;
    right(arg0: V): Pair<string, V>;
    toString(): string;
}