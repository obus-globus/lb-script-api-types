import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { ShortLongPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortLongPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2LongOpenCustomHashMap$MapEntry extends Object implements Short2LongMap$Entry, ShortLongPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ShortLongPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ShortLongPair;
    constructor(null_: Short2LongOpenCustomHashMap$MapEntry)
    constructor(null_: Short2LongOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortLongPair;
    firstShort(): number;
    getLongValue(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortLongPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortLongPair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): ShortLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortLongPair;
    valueLong(): number;
}