import type { CharObjectPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharObjectMutablePair<V extends unknown> extends Object implements CharObjectPair<V>, Serializable {
    static of<V extends unknown>(paramarg0: string, paramarg1: V): CharObjectMutablePair<V>;
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