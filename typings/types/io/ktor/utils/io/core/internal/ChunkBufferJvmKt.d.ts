import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../../../../kotlinx/io/Buffer.d.ts'
export class ChunkBufferJvmKt extends Object {
    static readDirect(self: Buffer, block: (param0: ByteBuffer) => void): void;
    static writeDirect(self: Buffer, min: number, block: (param0: ByteBuffer) => void): void;
}