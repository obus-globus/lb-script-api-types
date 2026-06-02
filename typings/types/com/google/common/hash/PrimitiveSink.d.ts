import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface PrimitiveSink extends Object{
    putBoolean(b: boolean): PrimitiveSink;
    putByte(b: number): PrimitiveSink;
    putBytes(bytes: ByteBuffer): PrimitiveSink;
    putBytes(bytes: number[]): PrimitiveSink;
    putBytes(bytes: number[], off: number, len: number): PrimitiveSink;
    putChar(c: string): PrimitiveSink;
    putDouble(d: number): PrimitiveSink;
    putFloat(f: number): PrimitiveSink;
    putInt(i: number): PrimitiveSink;
    putLong(l: number): PrimitiveSink;
    putShort(s: number): PrimitiveSink;
    putString(charSequence: CharSequence, charset: Charset): PrimitiveSink;
    putUnencodedChars(charSequence: CharSequence): PrimitiveSink;
}