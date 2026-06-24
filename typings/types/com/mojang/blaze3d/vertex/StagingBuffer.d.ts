import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { StagingBuffer$BufferHandle } from '../../../../com/mojang/blaze3d/vertex/StagingBuffer$BufferHandle.d.ts'
import type { StagingBuffer$Uploader } from '../../../../com/mojang/blaze3d/vertex/StagingBuffer$Uploader.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class StagingBuffer extends Object implements AutoCloseable {
    static create(paramname: string, paramgpuDevice: GpuDevice, parambufferSize: number): StagingBuffer;
    constructor()
    // private nextWriteOffset: number;
    // private usedBufferCount: number;
    close(): void;
    copyTo(encoder: CommandEncoder, dstBuffer: GpuBuffer, dstOffset: number, stagingBufferOffset: number, copySize: number): void;
    getWriteBuffer(): ByteBuffer;
    rotateBuffer(): void;
    startUploading(encoder: CommandEncoder): StagingBuffer$Uploader;
    tryAppend(buffer: ByteBuffer): StagingBuffer$BufferHandle;
    // private tryClearAndRotate(): void;
}