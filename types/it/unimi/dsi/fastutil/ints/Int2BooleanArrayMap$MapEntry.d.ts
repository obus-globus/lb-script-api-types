import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { IntBooleanPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2BooleanArrayMap$MapEntry extends Object implements Int2BooleanMap$Entry, IntBooleanPair, Map$Entry<number, boolean> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: IntBooleanPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: boolean): IntBooleanPair;
    constructor(null_: Int2BooleanArrayMap$MapEntry)
    constructor(null_: Int2BooleanArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntBooleanPair;
    first(arg0: number): IntBooleanPair;
    firstInt(): number;
    getBooleanValue(): boolean;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntBooleanPair;
    key(arg0: number): IntBooleanPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntBooleanPair;
    left(arg0: number): IntBooleanPair;
    leftInt(): number;
    right(arg0: boolean): IntBooleanPair;
    right(): boolean;
    right(arg0: boolean): IntBooleanPair;
    right(arg0: boolean): IntBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): IntBooleanPair;
    second(arg0: boolean): IntBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): IntBooleanPair;
    value(arg0: boolean): IntBooleanPair;
    valueBoolean(): boolean;
}