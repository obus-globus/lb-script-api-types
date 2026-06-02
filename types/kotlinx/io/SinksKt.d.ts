import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
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
    static writeToInternalBuffer(paramarg0: Sink, paramarg1: Function1<Object, void>): void;
//     static writeUByte-EK-6454(paramarg0: Sink, paramarg1: number): void;
 // ; invalid because of -//     static writeUInt-Qn1smSk(paramarg0: Sink, paramarg1: number): void;
 // ; invalid because of -//     static writeUIntLe-Qn1smSk(paramarg0: Sink, paramarg1: number): void;
 // ; invalid because of -//     static writeULong-2TYgG_w(paramarg0: Sink, paramarg1: number): void;
 // ; invalid because of -//     static writeULongLe-2TYgG_w(paramarg0: Sink, paramarg1: number): void;
 // ; invalid because of -//     static writeUShort-i8woANY(paramarg0: Sink, paramarg1: number): void;
 // ; invalid because of -//     static writeUShortLe-i8woANY(paramarg0: Sink, paramarg1: number): void;
 // ; invalid because of -}