import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { CharReferencePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ReferenceOpenCustomHashMap$MapEntry extends Object implements Char2ReferenceMap$Entry<V>, CharReferencePair<V>, Map$Entry<string, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: string, paramarg1: Object | null): CharReferencePair<Object>;
    constructor(null_: Char2ReferenceOpenCustomHashMap$MapEntry)
    constructor(null_: Char2ReferenceOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharReferencePair<V>;
    firstChar(): string;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharReferencePair<V>;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharReferencePair<V>;
    leftChar(): string;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): CharReferencePair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}