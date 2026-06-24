import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanGpuBuffer } from '../../../../com/mojang/blaze3d/vulkan/VulkanGpuBuffer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
export class VulkanGpuBuffer$Direct extends VulkanGpuBuffer {
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
    constructor(device: VulkanDevice, label: () => string, usage: number, size: number, forceHostVisibleAllocation: boolean)
    readonly closed: boolean;
    // private device: VulkanDevice;
    // private mappingRefCount: number;
    // private vmaAllocation: number;
    close(): void;
    destroy(): void;
    isClosed(): boolean;
    map(read: boolean, write: boolean): GpuBufferSlice$MappedView;
    map(offset: number, length: number, read: boolean, write: boolean): GpuBufferSlice$MappedView;
}