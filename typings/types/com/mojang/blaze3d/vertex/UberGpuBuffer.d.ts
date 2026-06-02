import type { GraphicsWorkarounds } from '../../../../com/mojang/blaze3d/GraphicsWorkarounds.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { TlsfAllocator } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator.d.ts'
import type { TlsfAllocator$Allocation } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Allocation.d.ts'
import type { UberGpuBuffer$StagedAllocationEntry } from '../../../../com/mojang/blaze3d/vertex/UberGpuBuffer$StagedAllocationEntry.d.ts'
import type { UberGpuBuffer$UberGpuBufferHeap } from '../../../../com/mojang/blaze3d/vertex/UberGpuBuffer$UberGpuBufferHeap.d.ts'
import type { UberGpuBuffer$UberGpuBufferStagingBuffer } from '../../../../com/mojang/blaze3d/vertex/UberGpuBuffer$UberGpuBufferStagingBuffer.d.ts'
import type { UberGpuBuffer$UploadCallback } from '../../../../com/mojang/blaze3d/vertex/UberGpuBuffer$UploadCallback.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UberGpuBuffer<T extends Object | number | string | boolean> extends Object implements AutoCloseable {
    constructor(name: string, usage: number, heapSize: number, alignSize: number, gpuDevice: GpuDevice, stagingBufferSize: number, workarounds: GraphicsWorkarounds)
    // private alignSize: number;
    // private allocationMap: Map<T, TlsfAllocator$Allocation>;
    // private name: string;
    // private nodes: Pair<TlsfAllocator, UberGpuBuffer$UberGpuBufferHeap>[];
    // private skippedStagedAllocations: T[];
    // private stagedAllocations: Map<T, UberGpuBuffer$StagedAllocationEntry<T>>;
    // private stagingBuffer: UberGpuBuffer$UberGpuBufferStagingBuffer;
    // private stagingBufferUsedSize: number;
    addAllocation(allocationKey: T, callback: UberGpuBuffer$UploadCallback<T>, buffer: ByteBuffer): boolean;
    close(): void;
    // private freeAllocation(allocationKey: T): void;
    getAllocation(allocationKey: T): TlsfAllocator$Allocation;
    getGpuBuffer(allocation: TlsfAllocator$Allocation): GpuBuffer;
    printStatistics(): void;
    removeAllocation(allocationKey: T): void;
    uploadStagedAllocations(gpuDevice: GpuDevice, encoder: CommandEncoder): boolean;
}