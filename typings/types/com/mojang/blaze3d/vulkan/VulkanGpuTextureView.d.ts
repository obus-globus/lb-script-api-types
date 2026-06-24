import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanGpuTexture } from '../../../../com/mojang/blaze3d/vulkan/VulkanGpuTexture.d.ts'
export class VulkanGpuTextureView extends GpuTextureView implements Destroyable {
    constructor(device: VulkanDevice, texture: VulkanGpuTexture, baseMipLevel: number, mipLevels: number)
    readonly closed: boolean;
    // private device: VulkanDevice;
    // private vkImageView: number;
    close(): void;
    destroy(): void;
    isClosed(): boolean;
    texture(): VulkanGpuTexture;
    vkImageView(): number;
}