import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { FloatLongPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatLongPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2LongLinkedOpenHashMap$MapEntry extends Object implements Float2LongMap$Entry, FloatLongPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: FloatLongPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): FloatLongPair;
    constructor(null_: Float2LongLinkedOpenHashMap$MapEntry)
    constructor(null_: Float2LongLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatLongPair;
    first(arg0: number): FloatLongPair;
    firstFloat(): number;
    getFloatKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatLongPair;
    key(arg0: number): FloatLongPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatLongPair;
    left(arg0: number): FloatLongPair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatLongPair;
    right(arg0: number): FloatLongPair;
    right(): number;
    right(arg0: number): FloatLongPair;
    right(arg0: number): FloatLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): FloatLongPair;
    second(arg0: number): FloatLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatLongPair;
    value(arg0: number): FloatLongPair;
    valueLong(): number;
}