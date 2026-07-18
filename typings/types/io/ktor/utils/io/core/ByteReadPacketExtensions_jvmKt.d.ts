import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class ByteReadPacketExtensions_jvmKt extends Object {
    static ByteReadPacket(byteBuffer: ByteBuffer): Source;
    static read(self: Source, block: (param0: ByteBuffer) => void): void;
    static readAvailable(self: Source, buffer: ByteBuffer): number;
    static readFully(self: Source, buffer: ByteBuffer): void;
}