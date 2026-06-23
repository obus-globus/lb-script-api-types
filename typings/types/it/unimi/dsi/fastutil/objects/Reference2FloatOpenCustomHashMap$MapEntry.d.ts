import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatMap$Entry.d.ts'
import type { ReferenceFloatPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2FloatOpenCustomHashMap$MapEntry extends Object implements Reference2FloatMap$Entry<K>, ReferenceFloatPair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceFloatPair<Object>;
    constructor(null_: Reference2FloatOpenCustomHashMap$MapEntry)
    constructor(null_: Reference2FloatOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    equals(arg0: Object | null): boolean;
    getFloatValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ReferenceFloatPair<K>;
    rightFloat(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ReferenceFloatPair<K>;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ReferenceFloatPair<K>;
    valueFloat(): number;
}