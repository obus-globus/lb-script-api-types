import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
export class VulkanGpuTexture extends GpuTexture implements Destroyable {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_CUBEMAP_COMPATIBLE: number;
    static USAGE_RENDER_ATTACHMENT: number;
    static USAGE_TEXTURE_BINDING: number;
    constructor(device: VulkanDevice, usage: number, label: string, format: GpuFormat, width: number, height: number, depthOrLayers: number, mipLevels: number)
    readonly closed: boolean;
    // private device: VulkanDevice;
    // private views: number;
    // private vkImage: number;
    // private vmaAllocation: number;
    addViews(): void;
    close(): void;
    destroy(): void;
    isClosed(): boolean;
    removeViews(): void;
    vkImage(): number;
}