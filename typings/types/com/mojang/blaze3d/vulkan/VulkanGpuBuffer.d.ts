import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
export abstract class VulkanGpuBuffer extends GpuBuffer implements Destroyable {
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
    constructor(vkBuffer: number, usage: number, size: number)
    // private vkBuffer: number;
    destroy(): void;
    vkBuffer(): number;
}