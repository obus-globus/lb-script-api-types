import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { FloatIntPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIntPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2IntOpenCustomHashMap$MapEntry extends Object implements Float2IntMap$Entry, FloatIntPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: FloatIntPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): FloatIntPair;
    constructor(null_: Float2IntOpenCustomHashMap$MapEntry)
    constructor(null_: Float2IntOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatIntPair;
    first(arg0: number): FloatIntPair;
    firstFloat(): number;
    getFloatKey(): number;
    getIntValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatIntPair;
    key(arg0: number): FloatIntPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatIntPair;
    left(arg0: number): FloatIntPair;
    leftFloat(): number;
    right(arg0: number): FloatIntPair;
    right(): number;
    right(arg0: number): FloatIntPair;
    right(arg0: number): FloatIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): FloatIntPair;
    second(arg0: number): FloatIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatIntPair;
    value(arg0: number): FloatIntPair;
    valueInt(): number;
}