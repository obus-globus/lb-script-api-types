import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { ReferenceBooleanPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2BooleanOpenCustomHashMap$MapEntry extends Object implements Reference2BooleanMap$Entry<K>, ReferenceBooleanPair<K>, Map$Entry<K, boolean> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: boolean): ReferenceBooleanPair<Object>;
    constructor(null_: Reference2BooleanOpenCustomHashMap$MapEntry)
    constructor(null_: Reference2BooleanOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    right(arg0: boolean): ReferenceBooleanPair<K>;
    right(): boolean;
    right(arg0: boolean): ReferenceBooleanPair<K>;
    right(arg0: boolean): ReferenceBooleanPair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ReferenceBooleanPair<K>;
    second(arg0: boolean): ReferenceBooleanPair<K>;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ReferenceBooleanPair<K>;
    value(arg0: boolean): ReferenceBooleanPair<K>;
    valueBoolean(): boolean;
}