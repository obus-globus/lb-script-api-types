import type { Object } from '../../java/lang/Object.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
export class SinksKt extends Object {
    static writeDecimalLong(paramarg0: Sink, paramarg1: number): void;
    static writeDouble(paramarg0: Sink, paramarg1: number): void;
    static writeDoubleLe(paramarg0: Sink, paramarg1: number): void;
    static writeFloat(paramarg0: Sink, paramarg1: number): void;
    static writeFloatLe(paramarg0: Sink, paramarg1: number): void;
    static writeHexadecimalUnsignedLong(paramarg0: Sink, paramarg1: number): void;
    static writeIntLe(paramarg0: Sink, paramarg1: number): void;
    static writeLongLe(paramarg0: Sink, paramarg1: number): void;
    static writeShortLe(paramarg0: Sink, paramarg1: number): void;
    static writeToInternalBuffer(paramarg0: Sink, paramarg1: (param0: Object | null) => void): void;
// (invalid TS: name contains '-')     static writeUByte-EK-6454(paramarg0: Sink, paramarg1: number): void;
// (invalid TS: name contains '-')     static writeUInt-Qn1smSk(paramarg0: Sink, paramarg1: number): void;
// (invalid TS: name contains '-')     static writeUIntLe-Qn1smSk(paramarg0: Sink, paramarg1: number): void;
// (invalid TS: name contains '-')     static writeULong-2TYgG_w(paramarg0: Sink, paramarg1: number): void;
// (invalid TS: name contains '-')     static writeULongLe-2TYgG_w(paramarg0: Sink, paramarg1: number): void;
// (invalid TS: name contains '-')     static writeUShort-i8woANY(paramarg0: Sink, paramarg1: number): void;
// (invalid TS: name contains '-')     static writeUShortLe-i8woANY(paramarg0: Sink, paramarg1: number): void;
}