import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanQueue } from '../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class VulkanCommandPool extends Object implements Destroyable {
    constructor(device: VulkanDevice, queue: VulkanQueue)
    // private allocatedBuffers: PointerBuffer;
    // private commandPool: number;
    // private device: VulkanDevice;
    allocateBuffer(): VkCommandBuffer;
    // private allocateMoreBuffers(): void;
    destroy(): void;
    release(): void;
    reset(): void;
}