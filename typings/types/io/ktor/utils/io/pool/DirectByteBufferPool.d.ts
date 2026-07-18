import type { DefaultPool } from '../../../../../io/ktor/utils/io/pool/DefaultPool.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
export class DirectByteBufferPool extends DefaultPool<ByteBuffer> {
    constructor(capacity: number, bufferSize: number)
    readonly bufferSize: number;
    protected clearInstance(instance: ByteBuffer): ByteBuffer;
    protected produceInstance(): ByteBuffer;
    protected validateInstance(instance: ByteBuffer): void;
}