import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { Appendable } from '../java/lang/Appendable.d.ts'
import type { WritableByteChannel } from '../java/nio/channels/WritableByteChannel.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export interface BufferedSink extends WritableByteChannel, Object, Sink{
    getBuffer(): Buffer;
    buffer(): Buffer;
    close(): void;
    emit(): BufferedSink;
    emitCompleteSegments(): BufferedSink;
    flush(): void;
    isOpen(): boolean;
    outputStream(): OutputStream;
    timeout(): Timeout;
    utf8Appendable(): Appendable;
    write(source: number[]): BufferedSink;
    write(source: number[], offset: number, byteCount: number): BufferedSink;
    write(byteString: ByteString): BufferedSink;
    write(byteString: ByteString, offset: number, byteCount: number): BufferedSink;
    write(source: Source, byteCount: number): BufferedSink;
    writeAll(source: Source): number;
    writeByte(b: number): BufferedSink;
    writeDecimalLong(v: number): BufferedSink;
    writeHexadecimalUnsignedLong(v: number): BufferedSink;
    writeInt(i: number): BufferedSink;
    writeIntLe(i: number): BufferedSink;
    writeLong(v: number): BufferedSink;
    writeLongLe(v: number): BufferedSink;
    writeShort(s: number): BufferedSink;
    writeShortLe(s: number): BufferedSink;
    writeString(string: string, charset: Charset): BufferedSink;
    writeString(string: string, beginIndex: number, endIndex: number, charset: Charset): BufferedSink;
    writeUtf8(string: string): BufferedSink;
    writeUtf8(string: string, beginIndex: number, endIndex: number): BufferedSink;
    writeUtf8CodePoint(codePoint: number): BufferedSink;
}