import type { Object } from '../java/lang/Object.d.ts'
import type { UInt } from '../kotlin/UInt.d.ts'
import type { ULong } from '../kotlin/ULong.d.ts'
export class UnsignedKt extends Object {
    static doubleToUInt(value: number): UInt;
    static doubleToULong(value: number): ULong;
    static uintCompare(v1: number, v2: number): number;
// (invalid TS: name contains '-')     static uintDivide-J1ME1BU(v1: UInt, v2: UInt): UInt;
// (invalid TS: name contains '-')     static uintRemainder-J1ME1BU(v1: UInt, v2: UInt): UInt;
    static uintToDouble(value: number): number;
    static ulongCompare(v1: number, v2: number): number;
// (invalid TS: name contains '-')     static ulongDivide-eb3DHEI(v1: ULong, v2: ULong): ULong;
// (invalid TS: name contains '-')     static ulongRemainder-eb3DHEI(v1: ULong, v2: ULong): ULong;
    static ulongToDouble(value: number): number;
    static ulongToString(value: number, base: number): string;
}