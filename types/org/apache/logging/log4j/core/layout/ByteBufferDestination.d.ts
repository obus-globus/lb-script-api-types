import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ByteBufferDestination extends Object{
    drain(buf: ByteBuffer): ByteBuffer;
    getByteBuffer(): ByteBuffer;
    writeBytes(data: ByteBuffer): void;
    writeBytes(data: number[], offset: number, length: number): void;
}