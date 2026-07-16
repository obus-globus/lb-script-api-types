import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { ObjectDoublePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2DoubleLinkedOpenHashMap$MapEntry extends Object implements Object2DoubleMap$Entry<K>, ObjectDoublePair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ObjectDoublePair<Object>, param1: ObjectDoublePair<Object>) => number;
    static of(paramarg0: Object | null, paramarg1: number): ObjectDoublePair<Object>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    equals(arg0: Object | null): boolean;
    getDoubleValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ObjectDoublePair<K>;
    rightDouble(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ObjectDoublePair<K>;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ObjectDoublePair<K>;
    valueDouble(): number;
}