import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { LongCharPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2CharLinkedOpenHashMap$MapEntry extends Object implements Long2CharMap$Entry, LongCharPair, Map$Entry<number, string> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: LongCharPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: string): LongCharPair;
    constructor(null_: Long2CharLinkedOpenHashMap$MapEntry)
    constructor(null_: Long2CharLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongCharPair;
    first(arg0: number): LongCharPair;
    firstLong(): number;
    getCharValue(): string;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongCharPair;
    key(arg0: number): LongCharPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongCharPair;
    left(arg0: number): LongCharPair;
    leftLong(): number;
    right(): string;
    right(arg0: string): LongCharPair;
    right(arg0: string): LongCharPair;
    right(): string;
    right(arg0: string): LongCharPair;
    right(arg0: string): LongCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): LongCharPair;
    second(arg0: string): LongCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): LongCharPair;
    value(arg0: string): LongCharPair;
    valueChar(): string;
}