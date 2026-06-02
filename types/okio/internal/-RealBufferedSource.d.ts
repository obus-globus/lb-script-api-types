import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { BufferedSource } from '../../okio/BufferedSource.d.ts'
import type { ByteString } from '../../okio/ByteString.d.ts'
import type { RealBufferedSource } from '../../okio/RealBufferedSource.d.ts'
import type { Sink } from '../../okio/Sink.d.ts'
import type { Timeout } from '../../okio/Timeout.d.ts'
export class -RealBufferedSource extends Object {
    static commonClose(paramarg0: RealBufferedSource): void;
    static commonExhausted(paramarg0: RealBufferedSource): boolean;
    static commonIndexOf(paramarg0: RealBufferedSource, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static commonIndexOf(paramarg0: RealBufferedSource, paramarg1: ByteString, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static commonIndexOfElement(paramarg0: RealBufferedSource, paramarg1: ByteString, paramarg2: number): number;
    static commonPeek(paramarg0: RealBufferedSource): BufferedSource;
    static commonRangeEquals(paramarg0: RealBufferedSource, paramarg1: number, paramarg2: ByteString, paramarg3: number, paramarg4: number): boolean;
    static commonRead(paramarg0: RealBufferedSource, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static commonRead(paramarg0: RealBufferedSource, paramarg1: Buffer, paramarg2: number): number;
    static commonReadAll(paramarg0: RealBufferedSource, paramarg1: Sink): number;
    static commonReadByte(paramarg0: RealBufferedSource): number;
    static commonReadByteArray(paramarg0: RealBufferedSource): number[];
    static commonReadByteArray(paramarg0: RealBufferedSource, paramarg1: number): number[];
    static commonReadByteString(paramarg0: RealBufferedSource): ByteString;
    static commonReadByteString(paramarg0: RealBufferedSource, paramarg1: number): ByteString;
    static commonReadDecimalLong(paramarg0: RealBufferedSource): number;
    static commonReadFully(paramarg0: RealBufferedSource, paramarg1: number[]): void;
    static commonReadFully(paramarg0: RealBufferedSource, paramarg1: Buffer, paramarg2: number): void;
    static commonReadHexadecimalUnsignedLong(paramarg0: RealBufferedSource): number;
    static commonReadInt(paramarg0: RealBufferedSource): number;
    static commonReadIntLe(paramarg0: RealBufferedSource): number;
    static commonReadLong(paramarg0: RealBufferedSource): number;
    static commonReadLongLe(paramarg0: RealBufferedSource): number;
    static commonReadShort(paramarg0: RealBufferedSource): number;
    static commonReadShortLe(paramarg0: RealBufferedSource): number;
    static commonReadUtf8(paramarg0: RealBufferedSource): string;
    static commonReadUtf8(paramarg0: RealBufferedSource, paramarg1: number): string;
    static commonReadUtf8CodePoint(paramarg0: RealBufferedSource): number;
    static commonReadUtf8Line(paramarg0: RealBufferedSource): string;
    static commonReadUtf8LineStrict(paramarg0: RealBufferedSource, paramarg1: number): string;
    static commonRequest(paramarg0: RealBufferedSource, paramarg1: number): boolean;
    static commonRequire(paramarg0: RealBufferedSource, paramarg1: number): void;
    static commonSelect(paramarg0: RealBufferedSource, paramarg1: (Object | null)[]): number;
    static commonSkip(paramarg0: RealBufferedSource, paramarg1: number): void;
    static commonTimeout(paramarg0: RealBufferedSource): Timeout;
    static commonToString(paramarg0: RealBufferedSource): string;
}