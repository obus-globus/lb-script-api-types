import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReadersJvmKt extends Object {
    static pass(self: ByteReadChannel, buffer: ByteBuffer, block: (param0: ByteBuffer) => void): void;
}