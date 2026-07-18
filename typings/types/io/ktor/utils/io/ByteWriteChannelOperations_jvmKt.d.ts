import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteWriteChannelOperations_jvmKt extends Object {
    static write(self: ByteWriteChannel, min: number, block: (param0: ByteBuffer) => void): void;
    static writeAvailable(self: ByteWriteChannel, min: number, block: (param0: ByteBuffer) => void): number;
    static writeAvailable(self: ByteWriteChannel, buffer: ByteBuffer): void;
    static writeByteBuffer(self: ByteWriteChannel, value: ByteBuffer): void;
    static writeFully(self: ByteWriteChannel, value: ByteBuffer): void;
}