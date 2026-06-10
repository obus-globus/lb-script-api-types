import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { ReferenceCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2CharArrayMap$MapEntry extends Object implements Reference2CharMap$Entry<K>, ReferenceCharPair<K>, Map$Entry<K, string> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: string): ReferenceCharPair<Object>;
    constructor(null_: Reference2CharArrayMap$MapEntry)
    constructor(null_: Reference2CharArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    left<K extends Object | number | string | boolean>(arg0: K): Pair<K, string>;
    right(): string;
    right<K extends Object | number | string | boolean>(arg0: string): ReferenceCharPair<K>;
    rightChar(): string;
    second(): string;
    second<K extends Object | number | string | boolean>(arg0: string): ReferenceCharPair<K>;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value<K extends Object | number | string | boolean>(arg0: string): ReferenceCharPair<K>;
    valueChar(): string;
}