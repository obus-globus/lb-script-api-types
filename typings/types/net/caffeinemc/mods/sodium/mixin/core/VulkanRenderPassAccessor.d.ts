import type { VulkanRenderPipeline } from '../../../../../../com/mojang/blaze3d/vulkan/VulkanRenderPipeline.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export interface VulkanRenderPassAccessor extends Object{
    sodium$getCommandBuffer(): VkCommandBuffer;
    sodium$getPipeline(): VulkanRenderPipeline;
}