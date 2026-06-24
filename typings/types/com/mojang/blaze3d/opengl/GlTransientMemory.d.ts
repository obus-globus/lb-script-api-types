import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { BufferStorage } from '../../../../com/mojang/blaze3d/opengl/BufferStorage.d.ts'
import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { GlCommandEncoder } from '../../../../com/mojang/blaze3d/opengl/GlCommandEncoder.d.ts'
import type { GlDebugLabel } from '../../../../com/mojang/blaze3d/opengl/GlDebugLabel.d.ts'
import type { GlDevice } from '../../../../com/mojang/blaze3d/opengl/GlDevice.d.ts'
import type { TransientMemory } from '../../../../com/mojang/blaze3d/systems/TransientMemory.d.ts'
import type { TransientBlockAllocator } from '../../../../com/mojang/blaze3d/util/TransientBlockAllocator.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GlTransientMemory extends Object implements TransientMemory, AutoCloseable {
    constructor(device: GlDevice, encoder: GlCommandEncoder)
    // private bufferStorage: BufferStorage;
    // private cpuBlockAllocator: TransientBlockAllocator<number>;
    // private debugLabels: GlDebugLabel;
    // private dsa: DirectStateAccess;
    // private encoder: GlCommandEncoder;
    allocateCpu(size: number, alignment: number): ByteBuffer;
    allocateCpu(size: number, alignment: number, minimumAllocation: number, elementSize: number): ByteBuffer;
    allocateGpu(size: number, alignment: number, usage: number): GpuBufferSlice;
    allocateGpu(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    allocateGpuMapped(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateGpuMapped(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    close(): void;
    rotate(): void;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
}