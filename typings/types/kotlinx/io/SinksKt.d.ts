import type { Object } from '../../java/lang/Object.d.ts'
import type { UByte } from '../../kotlin/UByte.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { UShort } from '../../kotlin/UShort.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
export class SinksKt extends Object {
    static writeDecimalLong(self: Sink, long: number): void;
    static writeDouble(self: Sink, double: number): void;
    static writeDoubleLe(self: Sink, double: number): void;
    static writeFloat(self: Sink, float: number): void;
    static writeFloatLe(self: Sink, float: number): void;
    static writeHexadecimalUnsignedLong(self: Sink, long: number): void;
    static writeIntLe(self: Sink, int: number): void;
    static writeLongLe(self: Sink, long: number): void;
    static writeShortLe(self: Sink, short: number): void;
    static writeToInternalBuffer(self: Sink, lambda: (param0: Buffer) => void): void;
// (invalid TS: name contains '-')     static writeUByte-EK-6454(self: Sink, byte: UByte): void;
// (invalid TS: name contains '-')     static writeUInt-Qn1smSk(self: Sink, int: UInt): void;
// (invalid TS: name contains '-')     static writeUIntLe-Qn1smSk(self: Sink, int: UInt): void;
// (invalid TS: name contains '-')     static writeULong-2TYgG_w(self: Sink, long: ULong): void;
// (invalid TS: name contains '-')     static writeULongLe-2TYgG_w(self: Sink, long: ULong): void;
// (invalid TS: name contains '-')     static writeUShort-i8woANY(self: Sink, short: UShort): void;
// (invalid TS: name contains '-')     static writeUShortLe-i8woANY(self: Sink, short: UShort): void;
}