import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StagedVertexBuffer$GpuBufferPool$PendingRecycle } from '../../../../net/minecraft/client/renderer/StagedVertexBuffer$GpuBufferPool$PendingRecycle.d.ts'
export class StagedVertexBuffer$GpuBufferPool extends Object implements AutoCloseable {
    private constructor(label: () => string, usage: number)
    // private available: GpuBuffer[];
    // private label: () => string;
    // private pendingRecycle: StagedVertexBuffer$GpuBufferPool$PendingRecycle[];
    // private usage: number;
    // private usedThisFrame: GpuBuffer[];
    acquire(device: GpuDevice, minSize: number): GpuBuffer;
    close(): void;
    endFrame(device: GpuDevice): void;
    // private takeBestAvailable(minSize: number, maxSize: number): GpuBuffer;
    // private tryRecycleBuffers(): void;
}