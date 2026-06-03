import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { IntLongPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntLongPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2LongLinkedOpenHashMap$MapEntry extends Object implements Int2LongMap$Entry, IntLongPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: IntLongPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): IntLongPair;
    constructor(null_: Int2LongLinkedOpenHashMap$MapEntry)
    constructor(null_: Int2LongLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntLongPair;
    first(arg0: number): IntLongPair;
    firstInt(): number;
    getIntKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntLongPair;
    key(arg0: number): IntLongPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntLongPair;
    left(arg0: number): IntLongPair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntLongPair;
    right(arg0: number): IntLongPair;
    right(): number;
    right(arg0: number): IntLongPair;
    right(arg0: number): IntLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): IntLongPair;
    second(arg0: number): IntLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntLongPair;
    value(arg0: number): IntLongPair;
    valueLong(): number;
}