import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { StagingBuffer } from '../../../../com/mojang/blaze3d/vertex/StagingBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { MappableRingBuffer } from '../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
export class StagingBuffer$PersistentlyMapped extends StagingBuffer {
    static create(paramname: string, paramgpuDevice: GpuDevice, parambufferSize: number): StagingBuffer;
    private constructor(name: string, bufferSize: number)
    // private currentBuffer: ByteBuffer;
    // private currentGPUBuffer: GpuBuffer;
    // private currentMappedView: GpuBufferSlice$MappedView;
    // private mappableRingBuffer: MappableRingBuffer;
    close(): void;
    copyTo(encoder: CommandEncoder, dstBuffer: GpuBuffer, dstOffset: number, stagingBufferOffset: number, copySize: number): void;
    getWriteBuffer(): ByteBuffer;
    rotateBuffer(): void;
}