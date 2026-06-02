import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { DoubleBytePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBytePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2ByteOpenCustomHashMap$MapEntry extends Object implements Double2ByteMap$Entry, DoubleBytePair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: DoubleBytePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): DoubleBytePair;
    constructor(null_: Double2ByteOpenCustomHashMap$MapEntry)
    constructor(null_: Double2ByteOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleBytePair;
    first(arg0: number): DoubleBytePair;
    firstDouble(): number;
    getByteValue(): number;
    getDoubleKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleBytePair;
    key(arg0: number): DoubleBytePair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleBytePair;
    left(arg0: number): DoubleBytePair;
    leftDouble(): number;
    right(arg0: number): DoubleBytePair;
    right(): number;
    right(arg0: number): DoubleBytePair;
    right(arg0: number): DoubleBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): DoubleBytePair;
    second(arg0: number): DoubleBytePair;
    secondByte(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleBytePair;
    value(arg0: number): DoubleBytePair;
    valueByte(): number;
}