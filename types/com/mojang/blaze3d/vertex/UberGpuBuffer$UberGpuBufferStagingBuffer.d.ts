import type { GraphicsWorkarounds } from '../../../../com/mojang/blaze3d/GraphicsWorkarounds.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class UberGpuBuffer$UberGpuBufferStagingBuffer extends Object {
    static create(paramname: string, paramgpuDevice: GpuDevice, paramstagingBufferSize: number, paramworkarounds: GraphicsWorkarounds): UberGpuBuffer$UberGpuBufferStagingBuffer;
    private constructor()
    clearFrame(encoder: CommandEncoder): void;
    copyToHeap(encoder: CommandEncoder, heapBuffer: GpuBuffer, heapOffset: number, stagingBufferOffset: number, copySize: number): void;
    destroyBuffer(): void;
    getStagingBuffer(): ByteBuffer;
}