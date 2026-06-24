import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TransientMemory extends Object{
    allocateCpu(size: number, alignment: number): ByteBuffer;
    allocateCpu(size: number, alignment: number, minimumAllocation: number, elementSize: number): ByteBuffer;
    allocateGpu(size: number, alignment: number, usage: number): GpuBufferSlice;
    allocateGpu(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    allocateGpuMapped(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateGpuMapped(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    multiUploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    multiUploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    uploadGpu(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
}