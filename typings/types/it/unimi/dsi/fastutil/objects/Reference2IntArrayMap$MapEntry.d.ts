import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { ReferenceIntPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceIntPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2IntArrayMap$MapEntry extends Object implements Reference2IntMap$Entry<K>, ReferenceIntPair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceIntPair<Object>;
    constructor(null_: Reference2IntArrayMap$MapEntry)
    constructor(null_: Reference2IntArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getIntValue(): number;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    left<K extends Object | number | string | boolean>(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ReferenceIntPair<K>;
    right(arg0: number): ReferenceIntPair<K>;
    right(): number;
    right(arg0: number): ReferenceIntPair<K>;
    right(arg0: number): ReferenceIntPair<K>;
    rightInt(): number;
    second(): number;
    second(arg0: number): ReferenceIntPair<K>;
    second(arg0: number): ReferenceIntPair<K>;
    secondInt(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceIntPair<K>;
    value(arg0: number): ReferenceIntPair<K>;
    valueInt(): number;
}