import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { BufferedSink } from '../../okio/BufferedSink.d.ts'
import type { ByteString } from '../../okio/ByteString.d.ts'
import type { RealBufferedSink } from '../../okio/RealBufferedSink.d.ts'
import type { Source } from '../../okio/Source.d.ts'
import type { Timeout } from '../../okio/Timeout.d.ts'
export class -RealBufferedSink extends Object {
    static commonClose(paramarg0: RealBufferedSink): void;
    static commonEmit(paramarg0: RealBufferedSink): BufferedSink;
    static commonEmitCompleteSegments(paramarg0: RealBufferedSink): BufferedSink;
    static commonFlush(paramarg0: RealBufferedSink): void;
    static commonTimeout(paramarg0: RealBufferedSink): Timeout;
    static commonToString(paramarg0: RealBufferedSink): string;
    static commonWrite(paramarg0: RealBufferedSink, paramarg1: number[]): BufferedSink;
    static commonWrite(paramarg0: RealBufferedSink, paramarg1: number[], paramarg2: number, paramarg3: number): BufferedSink;
    static commonWrite(paramarg0: RealBufferedSink, paramarg1: ByteString): BufferedSink;
    static commonWrite(paramarg0: RealBufferedSink, paramarg1: ByteString, paramarg2: number, paramarg3: number): BufferedSink;
    static commonWrite(paramarg0: RealBufferedSink, paramarg1: Source, paramarg2: number): BufferedSink;
    static commonWrite(paramarg0: RealBufferedSink, paramarg1: Buffer, paramarg2: number): void;
    static commonWriteAll(paramarg0: RealBufferedSink, paramarg1: Source): number;
    static commonWriteByte(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteDecimalLong(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteHexadecimalUnsignedLong(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteInt(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteIntLe(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteLong(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteLongLe(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteShort(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteShortLe(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
    static commonWriteUtf8(paramarg0: RealBufferedSink, paramarg1: string): BufferedSink;
    static commonWriteUtf8(paramarg0: RealBufferedSink, paramarg1: string, paramarg2: number, paramarg3: number): BufferedSink;
    static commonWriteUtf8CodePoint(paramarg0: RealBufferedSink, paramarg1: number): BufferedSink;
}