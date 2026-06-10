import type { CharObjectPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharObjectMutablePair<V extends Object | number | string | boolean> extends Object implements CharObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: string, paramarg1: Object | null): CharObjectMutablePair<Object>;
    static of(paramarg0: string, paramarg1: Object | null): CharObjectPair<Object>;
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
    left(arg0: string): CharObjectMutablePair<V>;
    leftChar(): string;
    right(): V;
    right(arg0: V): CharObjectMutablePair<V>;
    toString(): string;
}