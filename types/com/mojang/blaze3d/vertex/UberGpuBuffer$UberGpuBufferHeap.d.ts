import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { TlsfAllocator$Heap } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Heap.d.ts'
export class UberGpuBuffer$UberGpuBufferHeap extends TlsfAllocator$Heap {
    constructor(size: number, gpuDevice: GpuDevice, usage: number, name: string)
    // private gpuBuffer: GpuBuffer;
}