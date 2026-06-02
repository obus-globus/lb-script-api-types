import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { ReferenceCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2CharOpenCustomHashMap$MapEntry extends Object implements Reference2CharMap$Entry<K>, ReferenceCharPair<K>, Map$Entry<K, string> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: string): ReferenceCharPair<Object>;
    constructor(null_: Reference2CharOpenCustomHashMap$MapEntry)
    constructor(null_: Reference2CharOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: string;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    right(arg0: string): ReferenceCharPair<K>;
    right(): string;
    right(arg0: string): ReferenceCharPair<K>;
    right(arg0: string): ReferenceCharPair<K>;
    rightChar(): string;
    second(): string;
    second(arg0: string): ReferenceCharPair<K>;
    second(arg0: string): ReferenceCharPair<K>;
    secondChar(): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): ReferenceCharPair<K>;
    value(arg0: string): ReferenceCharPair<K>;
    valueChar(): string;
}