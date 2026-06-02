import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { ObjectDoublePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2DoubleLinkedOpenCustomHashMap$MapEntry extends Object implements Object2DoubleMap$Entry<K>, ObjectDoublePair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectDoublePair<Object>;
    constructor(null_: Object2DoubleLinkedOpenCustomHashMap$MapEntry)
    constructor(null_: Object2DoubleLinkedOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getDoubleValue(): number;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    right(arg0: number): ObjectDoublePair<K>;
    right(): number;
    right(arg0: number): ObjectDoublePair<K>;
    right(arg0: number): ObjectDoublePair<K>;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ObjectDoublePair<K>;
    second(arg0: number): ObjectDoublePair<K>;
    secondDouble(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectDoublePair<K>;
    value(arg0: number): ObjectDoublePair<K>;
    valueDouble(): number;
}