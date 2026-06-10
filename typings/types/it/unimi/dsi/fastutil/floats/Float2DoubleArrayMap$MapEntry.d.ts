import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { FloatDoublePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2DoubleArrayMap$MapEntry extends Object implements Float2DoubleMap$Entry, FloatDoublePair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): FloatDoublePair;
    constructor(null_: Float2DoubleArrayMap$MapEntry)
    constructor(null_: Float2DoubleArrayMap$MapEntry, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatDoublePair;
    firstFloat(): number;
    getDoubleValue(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatDoublePair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatDoublePair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): FloatDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatDoublePair;
    valueDouble(): number;
}