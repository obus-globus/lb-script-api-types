import type { VulkanQueue } from '../../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { AbstractCheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/AbstractCheckpointStorage.d.ts'
import type { CheckpointExtension$CheckpointType } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointType.d.ts'
import type { CheckpointExtension$QueueCheckpoints } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$QueueCheckpoints.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { VkCommandBuffer } from '../../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NvidiaCheckpointExtension$NvidiaCheckpointStorage extends AbstractCheckpointStorage {
    constructor(queue: VulkanQueue, maxFramesInFlight: number)
    recordCheckpoint(commandBuffer: VkCommandBuffer, type: CheckpointExtension$CheckpointType, label: () => string): void;
    recordCheckpoint(commandBuffer: VkCommandBuffer, id: number): void;
    retrieveCheckpoints(): CheckpointExtension$QueueCheckpoints;
}