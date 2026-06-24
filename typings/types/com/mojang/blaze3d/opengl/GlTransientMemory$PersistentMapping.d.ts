import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { GlCommandEncoder } from '../../../../com/mojang/blaze3d/opengl/GlCommandEncoder.d.ts'
import type { GlDevice } from '../../../../com/mojang/blaze3d/opengl/GlDevice.d.ts'
import type { GlTransientMemory } from '../../../../com/mojang/blaze3d/opengl/GlTransientMemory.d.ts'
import type { GlTransientMemory$PersistentMapping$GlAllocation } from '../../../../com/mojang/blaze3d/opengl/GlTransientMemory$PersistentMapping$GlAllocation.d.ts'
import type { GlTransientMemory$PersistentMapping$Rotation } from '../../../../com/mojang/blaze3d/opengl/GlTransientMemory$PersistentMapping$Rotation.d.ts'
import type { TransientBlockAllocator } from '../../../../com/mojang/blaze3d/util/TransientBlockAllocator.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class GlTransientMemory$PersistentMapping extends GlTransientMemory {
    constructor(device: GlDevice, encoder: GlCommandEncoder)
    // private gpuBlockAllocator: TransientBlockAllocator<GlTransientMemory$PersistentMapping$GlAllocation>;
    // private gpuMappedBlockAllocator: TransientBlockAllocator<GlTransientMemory$PersistentMapping$GlAllocation>;
    // private rotations: GlTransientMemory$PersistentMapping$Rotation[];
    // private stagingBlockAllocator: TransientBlockAllocator<GlTransientMemory$PersistentMapping$GlAllocation>;
    // private allocateGlBlock(size: number, host: boolean, mapped: boolean): GlTransientMemory$PersistentMapping$GlAllocation;
    allocateGpu(size: number, alignment: number, usage: number): GpuBufferSlice;
    allocateGpu(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    allocateGpuMapped(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateGpuMapped(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    close(): void;
    // private freeGlBlock(allocation: GlTransientMemory$PersistentMapping$GlAllocation): void;
    multiUpload(data: ByteBuffer[], alignment: number, usage: number, staging: boolean): GpuBufferSlice[];
    multiUploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    multiUploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    rotate(): void;
    upload(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number, staging: boolean): GpuBufferSlice;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
}