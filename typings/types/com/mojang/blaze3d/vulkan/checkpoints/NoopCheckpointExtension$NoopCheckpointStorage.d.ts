import type { CheckpointExtension$CheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointStorage.d.ts'
import type { CheckpointExtension$CheckpointType } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointType.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NoopCheckpointExtension$NoopCheckpointStorage extends Object implements CheckpointExtension$CheckpointStorage {
    private constructor()
    recordCheckpoint(commandBuffer: VkCommandBuffer, type: CheckpointExtension$CheckpointType, label: () => string): void;
    rotate(): void;
}