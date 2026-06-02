import type { Object } from '../java/lang/Object.d.ts'
import type { Comparable } from '../java/lang/Comparable.d.ts'
import type { UByte } from '../kotlin/UByte.d.ts'
import type { UInt } from '../kotlin/UInt.d.ts'
import type { ULong } from '../kotlin/ULong.d.ts'
import type { UShort$Companion } from '../kotlin/UShort$Companion.d.ts'
export class UShort extends Object implements Comparable<UShort> {
    static Companion: UShort$Companion;
    static MAX_VALUE: number;
    static MIN_VALUE: number;
    static SIZE_BITS: number;
    static SIZE_BYTES: number;
//     static box-impl(paramarg0: number): UShort;
 // ; invalid because of -//     static constructor-impl(paramarg0: number): number;
 // ; invalid because of -//     static equals-impl(paramarg0: number, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: number, paramarg1: number): boolean;
 // ; invalid because of -//     static hashCode-impl(paramarg0: number): number;
 // ; invalid because of -//     static toString-impl(paramarg0: number): string;
 // ; invalid because of -    constructor(data: number)
    // private data: number;
    and(other: UShort): UShort;
    compareTo(other: UByte): number;
    compareTo(other: UInt): number;
    compareTo(other: ULong): number;
    compareTo(other: UShort): number;
    dec(): UShort;
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
    inc(): UShort;
    inv(): UShort;
    minus(other: UByte): UInt;
    minus(other: UInt): UInt;
    minus(other: ULong): ULong;
    minus(other: UShort): UInt;
    mod(other: UByte): UByte;
    mod(other: UInt): UInt;
    mod(other: ULong): ULong;
    mod(other: UShort): UShort;
    or(other: UShort): UShort;
    plus(other: UByte): UInt;
    plus(other: UInt): UInt;
    plus(other: ULong): ULong;
    plus(other: UShort): UInt;
    rangeTo(other: UShort): (Object | null)[];
    rangeUntil(other: UShort): (Object | null)[];
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
    xor(other: UShort): UShort;
}