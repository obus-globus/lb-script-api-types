import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { AsciiString } from '../../../io/netty/util/AsciiString.d.ts'
import type { ResourceLeakDetector$LeakListener } from '../../../io/netty/util/ResourceLeakDetector$LeakListener.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { CharBuffer } from '../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ByteBufUtil extends Object {
    static appendPrettyHexDump(paramarg0: StringBuilder, paramarg1: ByteBuf): void;
    static appendPrettyHexDump(paramarg0: StringBuilder, paramarg1: ByteBuf, paramarg2: number, paramarg3: number): void;
    static compare(paramarg0: ByteBuf, paramarg1: ByteBuf): number;
    static copy(paramarg0: AsciiString, paramarg1: number, paramarg2: ByteBuf, paramarg3: number): void;
    static copy(paramarg0: AsciiString, paramarg1: number, paramarg2: ByteBuf, paramarg3: number, paramarg4: number): void;
    static copy(paramarg0: AsciiString, paramarg1: ByteBuf): void;
    static decodeHexByte(paramarg0: CharSequence, paramarg1: number): number;
    static decodeHexDump(paramarg0: CharSequence): number[];
    static decodeHexDump(paramarg0: CharSequence, paramarg1: number, paramarg2: number): number[];
    static encodeString(paramarg0: ByteBufAllocator, paramarg1: CharBuffer, paramarg2: Charset): ByteBuf;
    static encodeString(paramarg0: ByteBufAllocator, paramarg1: CharBuffer, paramarg2: Charset, paramarg3: number): ByteBuf;
    static ensureAccessible(paramarg0: ByteBuf): ByteBuf;
    static ensureWritableSuccess(paramarg0: number): boolean;
    static equals(paramarg0: ByteBuf, paramarg1: number, paramarg2: ByteBuf, paramarg3: number, paramarg4: number): boolean;
    static equals(paramarg0: ByteBuf, paramarg1: ByteBuf): boolean;
    static getBytes(paramarg0: ByteBuf): number[];
    static getBytes(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): number[];
    static getBytes(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: boolean): number[];
    static hashCode(paramarg0: ByteBuf): number;
    static hexDump(paramarg0: number[]): string;
    static hexDump(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static hexDump(paramarg0: ByteBuf): string;
    static hexDump(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): string;
    static indexOf(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static indexOf(paramarg0: ByteBuf, paramarg1: ByteBuf): number;
    static isAccessible(paramarg0: ByteBuf): boolean;
    static isText(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: Charset): boolean;
    static isText(paramarg0: ByteBuf, paramarg1: Charset): boolean;
    static prettyHexDump(paramarg0: ByteBuf): string;
    static prettyHexDump(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): string;
    static readBytes(paramarg0: ByteBufAllocator, paramarg1: ByteBuf, paramarg2: number): ByteBuf;
    static readIntBE(paramarg0: ByteBuf): number;
    static readUnsignedShortBE(paramarg0: ByteBuf): number;
    static reserveAndWriteUtf8(paramarg0: ByteBuf, paramarg1: CharSequence, paramarg2: number): number;
    static reserveAndWriteUtf8(paramarg0: ByteBuf, paramarg1: CharSequence, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static setLeakListener(paramarg0: ResourceLeakDetector$LeakListener): void;
    static setShortBE(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): ByteBuf;
    static swapInt(paramarg0: number): number;
    static swapLong(paramarg0: number): number;
    static swapMedium(paramarg0: number): number;
    static swapShort(paramarg0: number): number;
    static threadLocalDirectBuffer(): ByteBuf;
    static utf8Bytes(paramarg0: CharSequence): number;
    static utf8Bytes(paramarg0: CharSequence, paramarg1: number, paramarg2: number): number;
    static utf8MaxBytes(paramarg0: number): number;
    static utf8MaxBytes(paramarg0: CharSequence): number;
    static writeAscii(paramarg0: ByteBuf, paramarg1: CharSequence): number;
    static writeAscii(paramarg0: ByteBufAllocator, paramarg1: CharSequence): ByteBuf;
    static writeMediumBE(paramarg0: ByteBuf, paramarg1: number): ByteBuf;
    static writeShortBE(paramarg0: ByteBuf, paramarg1: number): ByteBuf;
    static writeUtf8(paramarg0: ByteBuf, paramarg1: CharSequence): number;
    static writeUtf8(paramarg0: ByteBuf, paramarg1: CharSequence, paramarg2: number, paramarg3: number): number;
    static writeUtf8(paramarg0: ByteBufAllocator, paramarg1: CharSequence): ByteBuf;
    private constructor()
}