import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface Hasher extends PrimitiveSink, Object{
    hash(): HashCode;
    putBoolean(b: boolean): Hasher;
    putByte(b: number): Hasher;
    putBytes(bytes: ByteBuffer): Hasher;
    putBytes(bytes: number[]): Hasher;
    putBytes(bytes: number[], off: number, len: number): Hasher;
    putChar(c: string): Hasher;
    putDouble(d: number): Hasher;
    putFloat(f: number): Hasher;
    putInt(i: number): Hasher;
    putLong(l: number): Hasher;
    putObject<T extends Object | number | string | boolean>(instance: T, funnel: Funnel<T>): Hasher;
    putShort(s: number): Hasher;
    putString(charSequence: CharSequence, charset: Charset): Hasher;
    putUnencodedChars(charSequence: CharSequence): Hasher;
}