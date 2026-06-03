import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { Buffer$UnsafeCursor } from '../../okio/Buffer$UnsafeCursor.d.ts'
import type { ByteString } from '../../okio/ByteString.d.ts'
import type { Segment } from '../../okio/Segment.d.ts'
import type { Sink } from '../../okio/Sink.d.ts'
import type { Source } from '../../okio/Source.d.ts'
export class -Buffer extends Object {
    static OVERFLOW_DIGIT_START: number;
    static OVERFLOW_ZONE: number;
    static SEGMENTING_THRESHOLD: number;
    static commonClear(paramarg0: Buffer): void;
    static commonClose(paramarg0: Buffer$UnsafeCursor): void;
    static commonCompleteSegmentByteCount(paramarg0: Buffer): number;
    static commonCopy(paramarg0: Buffer): Buffer;
    static commonCopyTo(paramarg0: Buffer, paramarg1: Buffer, paramarg2: number, paramarg3: number): Buffer;
    static commonEquals(paramarg0: Buffer, paramarg1: Object): boolean;
    static commonExpandBuffer(paramarg0: Buffer$UnsafeCursor, paramarg1: number): number;
    static commonGet(paramarg0: Buffer, paramarg1: number): number;
    static commonHashCode(paramarg0: Buffer): number;
    static commonIndexOf(paramarg0: Buffer, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static commonIndexOf(paramarg0: Buffer, paramarg1: ByteString, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static commonIndexOfElement(paramarg0: Buffer, paramarg1: ByteString, paramarg2: number): number;
    static commonNext(paramarg0: Buffer$UnsafeCursor): number;
    static commonRangeEquals(paramarg0: Buffer, paramarg1: number, paramarg2: ByteString, paramarg3: number, paramarg4: number): boolean;
    static commonRead(paramarg0: Buffer, paramarg1: number[]): number;
    static commonRead(paramarg0: Buffer, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static commonRead(paramarg0: Buffer, paramarg1: Buffer, paramarg2: number): number;
    static commonReadAll(paramarg0: Buffer, paramarg1: Sink): number;
    static commonReadAndWriteUnsafe(paramarg0: Buffer, paramarg1: Buffer$UnsafeCursor): Buffer$UnsafeCursor;
    static commonReadByte(paramarg0: Buffer): number;
    static commonReadByteArray(paramarg0: Buffer): number[];
    static commonReadByteArray(paramarg0: Buffer, paramarg1: number): number[];
    static commonReadByteString(paramarg0: Buffer): ByteString;
    static commonReadByteString(paramarg0: Buffer, paramarg1: number): ByteString;
    static commonReadDecimalLong(paramarg0: Buffer): number;
    static commonReadFully(paramarg0: Buffer, paramarg1: number[]): void;
    static commonReadFully(paramarg0: Buffer, paramarg1: Buffer, paramarg2: number): void;
    static commonReadHexadecimalUnsignedLong(paramarg0: Buffer): number;
    static commonReadInt(paramarg0: Buffer): number;
    static commonReadLong(paramarg0: Buffer): number;
    static commonReadShort(paramarg0: Buffer): number;
    static commonReadUnsafe(paramarg0: Buffer, paramarg1: Buffer$UnsafeCursor): Buffer$UnsafeCursor;
    static commonReadUtf8(paramarg0: Buffer, paramarg1: number): string;
    static commonReadUtf8CodePoint(paramarg0: Buffer): number;
    static commonReadUtf8Line(paramarg0: Buffer): string;
    static commonReadUtf8LineStrict(paramarg0: Buffer, paramarg1: number): string;
    static commonResizeBuffer(paramarg0: Buffer$UnsafeCursor, paramarg1: number): number;
    static commonSeek(paramarg0: Buffer$UnsafeCursor, paramarg1: number): number;
    static commonSelect(paramarg0: Buffer, paramarg1: (Object | null)[]): number;
    static commonSkip(paramarg0: Buffer, paramarg1: number): void;
    static commonSnapshot(paramarg0: Buffer): ByteString;
    static commonSnapshot(paramarg0: Buffer, paramarg1: number): ByteString;
    static commonWritableSegment(paramarg0: Buffer, paramarg1: number): Segment;
    static commonWrite(paramarg0: Buffer, paramarg1: number[]): Buffer;
    static commonWrite(paramarg0: Buffer, paramarg1: number[], paramarg2: number, paramarg3: number): Buffer;
    static commonWrite(paramarg0: Buffer, paramarg1: ByteString, paramarg2: number, paramarg3: number): Buffer;
    static commonWrite(paramarg0: Buffer, paramarg1: Source, paramarg2: number): Buffer;
    static commonWrite(paramarg0: Buffer, paramarg1: Buffer, paramarg2: number): void;
    static commonWriteAll(paramarg0: Buffer, paramarg1: Source): number;
    static commonWriteByte(paramarg0: Buffer, paramarg1: number): Buffer;
    static commonWriteDecimalLong(paramarg0: Buffer, paramarg1: number): Buffer;
    static commonWriteHexadecimalUnsignedLong(paramarg0: Buffer, paramarg1: number): Buffer;
    static commonWriteInt(paramarg0: Buffer, paramarg1: number): Buffer;
    static commonWriteLong(paramarg0: Buffer, paramarg1: number): Buffer;
    static commonWriteShort(paramarg0: Buffer, paramarg1: number): Buffer;
    static commonWriteUtf8(paramarg0: Buffer, paramarg1: string, paramarg2: number, paramarg3: number): Buffer;
    static commonWriteUtf8CodePoint(paramarg0: Buffer, paramarg1: number): Buffer;
    static getHEX_DIGIT_BYTES(): number[];
    static rangeEquals(paramarg0: Segment, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static readUtf8Line(paramarg0: Buffer, paramarg1: number): string;
    static seek(paramarg0: Buffer, paramarg1: number, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): Object | null;
    static selectPrefix(paramarg0: Buffer, paramarg1: (Object | null)[], paramarg2: boolean): number;
}