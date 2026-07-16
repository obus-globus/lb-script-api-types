import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../java/nio/channels/WritableByteChannel.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
export class SinksJvmKt extends Object {
    static asByteChannel(self: Sink): WritableByteChannel;
    static asOutputStream(self: Sink): OutputStream;
    static write(self: Sink, source: ByteBuffer): number;
    static writeString(self: Sink, string: string, charset: Charset, startIndex: number, endIndex: number): void;
}