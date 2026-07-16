import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { ReferenceShortPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceShortPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2ShortArrayMap$MapEntry extends Object implements Reference2ShortMap$Entry<K>, ReferenceShortPair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceShortPair<Object>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    equals(arg0: Object | null): boolean;
    getShortValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ReferenceShortPair<K>;
    rightShort(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ReferenceShortPair<K>;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ReferenceShortPair<K>;
    valueShort(): number;
}