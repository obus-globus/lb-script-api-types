import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { ByteCharPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2CharOpenHashMap$MapEntry extends Object implements Byte2CharMap$Entry, ByteCharPair, Map$Entry<number, string> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ByteCharPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: string): ByteCharPair;
    constructor(null_: Byte2CharOpenHashMap$MapEntry)
    constructor(null_: Byte2CharOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteCharPair;
    first(arg0: number): ByteCharPair;
    firstByte(): number;
    getByteKey(): number;
    getCharValue(): string;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteCharPair;
    key(arg0: number): ByteCharPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteCharPair;
    left(arg0: number): ByteCharPair;
    leftByte(): number;
    right(): string;
    right(arg0: string): ByteCharPair;
    right(arg0: string): ByteCharPair;
    right(): string;
    right(arg0: string): ByteCharPair;
    right(arg0: string): ByteCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): ByteCharPair;
    second(arg0: string): ByteCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): ByteCharPair;
    value(arg0: string): ByteCharPair;
    valueChar(): string;
}