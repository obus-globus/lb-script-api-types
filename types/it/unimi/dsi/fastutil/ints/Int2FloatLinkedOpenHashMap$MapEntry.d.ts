import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { IntFloatPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2FloatLinkedOpenHashMap$MapEntry extends Object implements Int2FloatMap$Entry, IntFloatPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: IntFloatPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntFloatPair;
    constructor(null_: Int2FloatLinkedOpenHashMap$MapEntry)
    constructor(null_: Int2FloatLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntFloatPair;
    first(arg0: number): IntFloatPair;
    firstInt(): number;
    getFloatValue(): number;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntFloatPair;
    key(arg0: number): IntFloatPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntFloatPair;
    left(arg0: number): IntFloatPair;
    leftInt(): number;
    right(arg0: number): IntFloatPair;
    right(): number;
    right(arg0: number): IntFloatPair;
    right(arg0: number): IntFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): IntFloatPair;
    second(arg0: number): IntFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntFloatPair;
    value(arg0: number): IntFloatPair;
    valueFloat(): number;
}