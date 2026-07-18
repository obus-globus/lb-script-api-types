import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteReadChannelOperations_jvmKt extends Object {
    static ByteReadChannel(content: ByteBuffer): ByteReadChannel;
    static ByteString(buffer: ByteBuffer): ByteString;
    static copyTo(self: ByteReadChannel, channel: WritableByteChannel, limit: number): number;
    static read(self: ByteReadChannel, min: number, consumer: (param0: ByteBuffer) => void): void;
    static readAvailable(self: ByteReadChannel, block: (param0: ByteBuffer) => number): number;
    static readAvailable(self: ByteReadChannel, buffer: ByteBuffer): number;
    static readFully(self: ByteReadChannel, buffer: ByteBuffer): void;
    static skipDelimiter(self: ByteReadChannel, delimiter: ByteBuffer): void;
    static skipDelimiter(self: ByteReadChannel, delimiter: ByteString): void;
}