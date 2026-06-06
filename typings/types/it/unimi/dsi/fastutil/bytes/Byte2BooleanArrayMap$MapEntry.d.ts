import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { ByteBooleanPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2BooleanArrayMap$MapEntry extends Object implements Byte2BooleanMap$Entry, ByteBooleanPair, Map$Entry<number, boolean> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ByteBooleanPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: boolean): ByteBooleanPair;
    constructor(null_: Byte2BooleanArrayMap$MapEntry)
    constructor(null_: Byte2BooleanArrayMap$MapEntry, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteBooleanPair;
    firstByte(): number;
    getBooleanValue(): boolean;
    getByteKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteBooleanPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteBooleanPair;
    leftByte(): number;
    right(): boolean;
    right(arg0: boolean): ByteBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ByteBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ByteBooleanPair;
    valueBoolean(): boolean;
}