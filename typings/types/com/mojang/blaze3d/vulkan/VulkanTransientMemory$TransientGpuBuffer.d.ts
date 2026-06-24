import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { VulkanGpuBuffer } from '../../../../com/mojang/blaze3d/vulkan/VulkanGpuBuffer.d.ts'
import type { VulkanTransientMemory } from '../../../../com/mojang/blaze3d/vulkan/VulkanTransientMemory.d.ts'
export class VulkanTransientMemory$TransientGpuBuffer extends VulkanGpuBuffer {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_HINT_CLIENT_STORAGE: number;
    static USAGE_INDEX: number;
    static USAGE_INDIRECT_PARAMETERS: number;
    static USAGE_MAP_READ: number;
    static USAGE_MAP_WRITE: number;
    static USAGE_UNIFORM: number;
    static USAGE_UNIFORM_TEXEL_BUFFER: number;
    static USAGE_VERTEX: number;
    constructor(null_: VulkanTransientMemory, vkBuffer: number, usage: number, size: number, bufferSubmitIndex: number)
    // private bufferSubmitIndex: number;
    readonly closed: boolean;
    close(): void;
    destroy(): void;
    isClosed(): boolean;
    map(read: boolean, write: boolean): GpuBufferSlice$MappedView;
    map(offset: number, length: number, read: boolean, write: boolean): GpuBufferSlice$MappedView;
    slice(): GpuBufferSlice;
    slice(offset: number, length: number): GpuBufferSlice;
}