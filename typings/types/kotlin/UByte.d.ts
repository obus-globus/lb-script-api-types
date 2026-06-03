import type { Object } from '../java/lang/Object.d.ts'
import type { Comparable } from '../java/lang/Comparable.d.ts'
import type { UByte$Companion } from '../kotlin/UByte$Companion.d.ts'
import type { UInt } from '../kotlin/UInt.d.ts'
import type { ULong } from '../kotlin/ULong.d.ts'
import type { UShort } from '../kotlin/UShort.d.ts'
export class UByte extends Object implements Comparable<UByte> {
    static Companion: UByte$Companion;
    static MAX_VALUE: number;
    static MIN_VALUE: number;
    static SIZE_BITS: number;
    static SIZE_BYTES: number;
// (invalid TS: name contains '-')     static box-impl(paramarg0: number): UByte;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: number): number;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: number, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: number, paramarg1: number): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: number): number;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: number): string;
    constructor(data: number)
    // private data: number;
    and(other: UByte): UByte;
    compareTo(other: UByte): number;
    compareTo(other: UInt): number;
    compareTo(other: ULong): number;
    compareTo(other: UShort): number;
    dec(): UByte;
    div(other: UByte): UInt;
    div(other: UInt): UInt;
    div(other: ULong): ULong;
    div(other: UShort): UInt;
    equals(other: Object | null): boolean;
    floorDiv(other: UByte): UInt;
    floorDiv(other: UInt): UInt;
    floorDiv(other: ULong): ULong;
    floorDiv(other: UShort): UInt;
    hashCode(): number;
    inc(): UByte;
    inv(): UByte;
    minus(other: UByte): UInt;
    minus(other: UInt): UInt;
    minus(other: ULong): ULong;
    minus(other: UShort): UInt;
    mod(other: UByte): UByte;
    mod(other: UInt): UInt;
    mod(other: ULong): ULong;
    mod(other: UShort): UShort;
    or(other: UByte): UByte;
    plus(other: UByte): UInt;
    plus(other: UInt): UInt;
    plus(other: ULong): ULong;
    plus(other: UShort): UInt;
    rangeTo(other: UByte): (Object | null)[];
    rangeUntil(other: UByte): (Object | null)[];
    rem(other: UByte): UInt;
    rem(other: UInt): UInt;
    rem(other: ULong): ULong;
    rem(other: UShort): UInt;
    times(other: UByte): UInt;
    times(other: UInt): UInt;
    times(other: ULong): ULong;
    times(other: UShort): UInt;
    toByte(): number;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toShort(): number;
    toString(): string;
    toUByte(): UByte;
    toUInt(): UInt;
    toULong(): ULong;
    toUShort(): UShort;
    xor(other: UByte): UByte;
}