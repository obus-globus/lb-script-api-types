import type { VulkanQueue$Submission$SemaphoreOp } from '../../../../com/mojang/blaze3d/vulkan/VulkanQueue$Submission$SemaphoreOp.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class VulkanQueue$Submission$SubmitStage extends Record {
    constructor()
    private constructor(waits: VulkanQueue$Submission$SemaphoreOp[], commandBuffers: VkCommandBuffer[], signals: VulkanQueue$Submission$SemaphoreOp[])
    // private commandBuffers: VkCommandBuffer[];
    // private signals: VulkanQueue$Submission$SemaphoreOp[];
    // private waits: VulkanQueue$Submission$SemaphoreOp[];
    commandBuffers(): VkCommandBuffer[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    signals(): VulkanQueue$Submission$SemaphoreOp[];
    toString(): string;
    waits(): VulkanQueue$Submission$SemaphoreOp[];
}