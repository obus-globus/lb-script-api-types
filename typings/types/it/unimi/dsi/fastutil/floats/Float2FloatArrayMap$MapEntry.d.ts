import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { FloatFloatPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2FloatArrayMap$MapEntry extends Object implements Float2FloatMap$Entry, FloatFloatPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: FloatFloatPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): FloatFloatPair;
    constructor(null_: Float2FloatArrayMap$MapEntry)
    constructor(null_: Float2FloatArrayMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatFloatPair;
    first(arg0: number): FloatFloatPair;
    firstFloat(): number;
    getFloatKey(): number;
    getFloatValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatFloatPair;
    key(arg0: number): FloatFloatPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatFloatPair;
    left(arg0: number): FloatFloatPair;
    leftFloat(): number;
    right(arg0: number): FloatFloatPair;
    right(): number;
    right(arg0: number): FloatFloatPair;
    right(arg0: number): FloatFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): FloatFloatPair;
    second(arg0: number): FloatFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatFloatPair;
    value(arg0: number): FloatFloatPair;
    valueFloat(): number;
}