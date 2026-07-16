import type { Object } from '../../java/lang/Object.d.ts'
import type { UByte } from '../../kotlin/UByte.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { UShort } from '../../kotlin/UShort.d.ts'
export class UStringsKt extends Object {
// (invalid TS: name contains '-')     static toString-JSWoG40(self: ULong, radix: number): string;
// (invalid TS: name contains '-')     static toString-LxnNnR4(self: UByte, radix: number): string;
// (invalid TS: name contains '-')     static toString-V7xB4Y4(self: UInt, radix: number): string;
// (invalid TS: name contains '-')     static toString-olVBNx4(self: UShort, radix: number): string;
    static toUByte(self: string): UByte;
    static toUByte(self: string, radix: number): UByte;
    static toUByteOrNull(self: string): UByte | null;
    static toUByteOrNull(self: string, radix: number): UByte | null;
    static toUInt(self: string): UInt;
    static toUInt(self: string, radix: number): UInt;
    static toUIntOrNull(self: string): UInt | null;
    static toUIntOrNull(self: string, radix: number): UInt | null;
    static toULong(self: string): ULong;
    static toULong(self: string, radix: number): ULong;
    static toULongOrNull(self: string): ULong | null;
    static toULongOrNull(self: string, radix: number): ULong | null;
    static toUShort(self: string): UShort;
    static toUShort(self: string, radix: number): UShort;
    static toUShortOrNull(self: string): UShort | null;
    static toUShortOrNull(self: string, radix: number): UShort | null;
}