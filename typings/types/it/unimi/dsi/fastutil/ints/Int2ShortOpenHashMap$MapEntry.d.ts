import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { IntShortPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntShortPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2ShortOpenHashMap$MapEntry extends Object implements Int2ShortMap$Entry, IntShortPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: IntShortPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntShortPair;
    constructor(null_: Int2ShortOpenHashMap$MapEntry)
    constructor(null_: Int2ShortOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntShortPair;
    first(arg0: number): IntShortPair;
    firstInt(): number;
    getIntKey(): number;
    getShortValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntShortPair;
    key(arg0: number): IntShortPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntShortPair;
    left(arg0: number): IntShortPair;
    leftInt(): number;
    right(arg0: number): IntShortPair;
    right(): number;
    right(arg0: number): IntShortPair;
    right(arg0: number): IntShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): IntShortPair;
    second(arg0: number): IntShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntShortPair;
    value(arg0: number): IntShortPair;
    valueShort(): number;
}