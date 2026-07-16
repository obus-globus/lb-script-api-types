import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
export class BuffersJvmKt extends Object {
    static asByteChannel(self: Buffer): ByteChannel;
    static copyTo(self: Buffer, out: OutputStream, startIndex: number, endIndex: number): void;
    static readAtMostTo(self: Buffer, sink: ByteBuffer): number;
    static readTo(self: Buffer, out: OutputStream, byteCount: number): void;
    static transferFrom(self: Buffer, input: InputStream): Buffer;
    static transferFrom(self: Buffer, source: ByteBuffer): Buffer;
    static write(self: Buffer, input: InputStream, byteCount: number): Buffer;
}