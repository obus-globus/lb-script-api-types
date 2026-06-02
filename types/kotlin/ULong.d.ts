import type { Object } from '../java/lang/Object.d.ts'
import type { Comparable } from '../java/lang/Comparable.d.ts'
import type { UByte } from '../kotlin/UByte.d.ts'
import type { UInt } from '../kotlin/UInt.d.ts'
import type { ULong$Companion } from '../kotlin/ULong$Companion.d.ts'
import type { UShort } from '../kotlin/UShort.d.ts'
export class ULong extends Object implements Comparable<ULong> {
    static Companion: ULong$Companion;
    static MAX_VALUE: number;
    static MIN_VALUE: number;
    static SIZE_BITS: number;
    static SIZE_BYTES: number;
//     static box-impl(paramarg0: number): ULong;
 // ; invalid because of -//     static constructor-impl(paramarg0: number): number;
 // ; invalid because of -//     static equals-impl(paramarg0: number, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: number, paramarg1: number): boolean;
 // ; invalid because of -//     static hashCode-impl(paramarg0: number): number;
 // ; invalid because of -//     static toString-impl(paramarg0: number): string;
 // ; invalid because of -    constructor(data: number)
    // private data: number;
    and(other: ULong): ULong;
    compareTo(other: UByte): number;
    compareTo(other: UInt): number;
    compareTo(other: ULong): number;
    compareTo(other: UShort): number;
    dec(): ULong;
    div(other: UByte): ULong;
    div(other: UInt): ULong;
    div(other: ULong): ULong;
    div(other: UShort): ULong;
    equals(other: Object | null): boolean;
    floorDiv(other: UByte): ULong;
    floorDiv(other: UInt): ULong;
    floorDiv(other: ULong): ULong;
    floorDiv(other: UShort): ULong;
    hashCode(): number;
    inc(): ULong;
    inv(): ULong;
    minus(other: UByte): ULong;
    minus(other: UInt): ULong;
    minus(other: ULong): ULong;
    minus(other: UShort): ULong;
    mod(other: UByte): UByte;
    mod(other: UInt): UInt;
    mod(other: ULong): ULong;
    mod(other: UShort): UShort;
    or(other: ULong): ULong;
    plus(other: UByte): ULong;
    plus(other: UInt): ULong;
    plus(other: ULong): ULong;
    plus(other: UShort): ULong;
    rangeTo(other: ULong): (Object | null)[];
    rangeUntil(other: ULong): (Object | null)[];
    rem(other: UByte): ULong;
    rem(other: UInt): ULong;
    rem(other: ULong): ULong;
    rem(other: UShort): ULong;
    shl(bitCount: number): ULong;
    shr(bitCount: number): ULong;
    times(other: UByte): ULong;
    times(other: UInt): ULong;
    times(other: ULong): ULong;
    times(other: UShort): ULong;
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
    xor(other: ULong): ULong;
}