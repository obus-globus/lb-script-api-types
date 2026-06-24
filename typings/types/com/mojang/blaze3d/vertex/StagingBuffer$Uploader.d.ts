import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { StagingBuffer } from '../../../../com/mojang/blaze3d/vertex/StagingBuffer.d.ts'
import type { StagingBuffer$BufferHandle } from '../../../../com/mojang/blaze3d/vertex/StagingBuffer$BufferHandle.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StagingBuffer$Uploader extends Object implements AutoCloseable {
    constructor(null_: StagingBuffer, encoder: CommandEncoder)
    // private encoder: CommandEncoder;
    checkValidFor(stagingBuffer: StagingBuffer): void;
    close(): void;
    copyTo(srcBuffer: StagingBuffer$BufferHandle, dstBuffer: GpuBuffer, dstOffset: number): void;
}