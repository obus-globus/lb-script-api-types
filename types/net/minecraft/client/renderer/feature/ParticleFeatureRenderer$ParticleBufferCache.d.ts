import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MappableRingBuffer } from '../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
export class ParticleFeatureRenderer$ParticleBufferCache extends Object implements AutoCloseable {
    constructor()
    // private ringBuffer: MappableRingBuffer;
    close(): void;
    get(): GpuBuffer;
    rotate(): void;
    write(byteBuffer: ByteBuffer): void;
}