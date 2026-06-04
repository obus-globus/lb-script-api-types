import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectBooleanPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2BooleanLinkedOpenHashMap$MapEntry extends Object implements Object2BooleanMap$Entry<K>, ObjectBooleanPair<K>, Map$Entry<K, boolean> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: boolean): ObjectBooleanPair<Object>;
    constructor(null_: Object2BooleanLinkedOpenHashMap$MapEntry)
    constructor(null_: Object2BooleanLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    left<K extends Object | number | string | boolean>(arg0: K): Pair<K, boolean>;
    right(): boolean;
    right(arg0: boolean): ObjectBooleanPair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ObjectBooleanPair<K>;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ObjectBooleanPair<K>;
    valueBoolean(): boolean;
}