import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleMap$Entry.d.ts'
import type { ReferenceDoublePair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2DoubleArrayMap$MapEntry extends Object implements Reference2DoubleMap$Entry<K>, ReferenceDoublePair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceDoublePair<Object>;
    constructor(null_: Reference2DoubleArrayMap$MapEntry)
    constructor(null_: Reference2DoubleArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getDoubleValue(): number;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    left<K extends Object | number | string | boolean>(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ReferenceDoublePair<K>;
    right(arg0: number): ReferenceDoublePair<K>;
    right(): number;
    right(arg0: number): ReferenceDoublePair<K>;
    right(arg0: number): ReferenceDoublePair<K>;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ReferenceDoublePair<K>;
    second(arg0: number): ReferenceDoublePair<K>;
    secondDouble(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceDoublePair<K>;
    value(arg0: number): ReferenceDoublePair<K>;
    valueDouble(): number;
}