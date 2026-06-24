import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanQueue$Submission } from '../../../../com/mojang/blaze3d/vulkan/VulkanQueue$Submission.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VkQueue } from '../../../../org/lwjgl/vulkan/VkQueue.d.ts'
export class VulkanQueue extends Record {
    constructor(device: VulkanDevice, queueFamilyIndex: number, queueIndex: number)
    constructor(vkQueue: VkQueue, queueFamilyIndex: number)
    // private queueFamilyIndex: number;
    // private vkQueue: VkQueue;
    beginSubmit(): VulkanQueue$Submission;
    equals(o: Object | null): boolean;
    hashCode(): number;
    queueFamilyIndex(): number;
    toString(): string;
    vkQueue(): VkQueue;
    waitIdle(): void;
}