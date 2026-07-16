import type { Object } from '../../java/lang/Object.d.ts'
import type { UByte } from '../../kotlin/UByte.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { UShort } from '../../kotlin/UShort.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class SourcesKt extends Object {
    static OVERFLOW_DIGIT_START: number;
    static OVERFLOW_ZONE: number;
    static indexOf(self: Source, byte: number, startIndex: number, endIndex: number): number;
    static readByteArray(self: Source): number[];
    static readByteArray(self: Source, byteCount: number): number[];
    static readDecimalLong(self: Source): number;
    static readDouble(self: Source): number;
    static readDoubleLe(self: Source): number;
    static readFloat(self: Source): number;
    static readFloatLe(self: Source): number;
    static readHexadecimalUnsignedLong(self: Source): number;
    static readIntLe(self: Source): number;
    static readLongLe(self: Source): number;
    static readShortLe(self: Source): number;
    static readTo(self: Source, sink: number[], startIndex: number, endIndex: number): void;
    static readUByte(self: Source): UByte;
    static readUInt(self: Source): UInt;
    static readUIntLe(self: Source): UInt;
    static readULong(self: Source): ULong;
    static readULongLe(self: Source): ULong;
    static readUShort(self: Source): UShort;
    static readUShortLe(self: Source): UShort;
    static startsWith(self: Source, byte: number): boolean;
}