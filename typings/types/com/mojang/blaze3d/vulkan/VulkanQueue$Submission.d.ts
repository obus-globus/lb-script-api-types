import type { VulkanQueue } from '../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { VulkanQueue$Submission$SubmitStage } from '../../../../com/mojang/blaze3d/vulkan/VulkanQueue$Submission$SubmitStage.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class VulkanQueue$Submission extends Object implements AutoCloseable {
    private constructor(null_: VulkanQueue)
    // private closed: boolean;
    // private stages: VulkanQueue$Submission$SubmitStage[];
    close(): void;
    executeCommands(commandBuffer: VkCommandBuffer): void;
    signalSemaphore(semaphore: number, value: number, stageMask: number): void;
    waitSemaphore(semaphore: number, value: number, stageMask: number): void;
}