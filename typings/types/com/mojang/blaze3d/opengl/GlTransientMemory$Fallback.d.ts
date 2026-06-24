import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { GlCommandEncoder } from '../../../../com/mojang/blaze3d/opengl/GlCommandEncoder.d.ts'
import type { GlDevice } from '../../../../com/mojang/blaze3d/opengl/GlDevice.d.ts'
import type { GlTransientMemory } from '../../../../com/mojang/blaze3d/opengl/GlTransientMemory.d.ts'
import type { GlTransientMemory$Fallback$GlAllocation } from '../../../../com/mojang/blaze3d/opengl/GlTransientMemory$Fallback$GlAllocation.d.ts'
import type { TransientBlockAllocator } from '../../../../com/mojang/blaze3d/util/TransientBlockAllocator.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class GlTransientMemory$Fallback extends GlTransientMemory {
    constructor(device: GlDevice, encoder: GlCommandEncoder)
    // private blockAllocator: TransientBlockAllocator<GlTransientMemory$Fallback$GlAllocation>;
    // private allocateGlBlock(size: number): GlTransientMemory$Fallback$GlAllocation;
    allocateGpu(size: number, alignment: number, usage: number): GpuBufferSlice;
    allocateGpu(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    allocateGpuMapped(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateGpuMapped(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    close(): void;
    // private freeGlBlock(allocation: GlTransientMemory$Fallback$GlAllocation): void;
    multiUploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    multiUploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    rotate(): void;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
}