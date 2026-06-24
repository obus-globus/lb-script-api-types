import type { VulkanGpuSampler } from '../../../../com/mojang/blaze3d/vulkan/VulkanGpuSampler.d.ts'
import type { VulkanGpuTextureView } from '../../../../com/mojang/blaze3d/vulkan/VulkanGpuTextureView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanRenderPass$TextureViewAndSampler extends Record {
    constructor(view: VulkanGpuTextureView, sampler: VulkanGpuSampler)
    // private sampler: VulkanGpuSampler;
    // private view: VulkanGpuTextureView;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sampler(): VulkanGpuSampler;
    toString(): string;
    view(): VulkanGpuTextureView;
}