import type { ByteWriteChannel } from '../../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class StreamsKt extends Object {
    static asByteWriteChannel(self: OutputStream): ByteWriteChannel;
    static asInput(self: InputStream): Source;
    static inputStream(self: Source): InputStream;
    static readPacketAtLeast(self: InputStream, min: number): Source;
    static writePacket(self: OutputStream, block: (param0: Sink) => void): void;
    static writePacket(self: OutputStream, packet: Source): void;
}