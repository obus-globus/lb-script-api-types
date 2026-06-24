import type { VulkanQueue } from '../../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { AbstractCheckpointStorage$Checkpoint } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/AbstractCheckpointStorage$Checkpoint.d.ts'
import type { AbstractCheckpointStorage$Frame } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/AbstractCheckpointStorage$Frame.d.ts'
import type { CheckpointExtension$CheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointStorage.d.ts'
import type { CheckpointExtension$CheckpointType } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointType.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkQueue } from '../../../../../org/lwjgl/vulkan/VkQueue.d.ts'
export abstract class AbstractCheckpointStorage extends Object implements CheckpointExtension$CheckpointStorage {
    constructor(queue: VulkanQueue, maxFramesInFlight: number)
    // private checkpointsByFrame: AbstractCheckpointStorage$Frame[];
    // private frame: number;
    // private maxFramesInFlight: number;
    // private nextCheckpointId: number;
    // private queue: VkQueue;
    findCheckpoint(id: number): AbstractCheckpointStorage$Checkpoint;
    recordCheckpoint(commandBuffer: VkCommandBuffer, type: CheckpointExtension$CheckpointType, label: () => string): void;
    recordCheckpoint(commandBuffer: VkCommandBuffer, id: number): void;
    rotate(): void;
}