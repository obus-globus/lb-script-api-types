import type { VulkanDevice } from '../../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanQueue } from '../../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { AmdCheckpointExtension$AmdCheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/AmdCheckpointExtension$AmdCheckpointStorage.d.ts'
import type { CheckpointExtension } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension.d.ts'
import type { CheckpointExtension$CheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointStorage.d.ts'
import type { CheckpointExtension$QueueCheckpoints } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$QueueCheckpoints.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AmdCheckpointExtension extends Object implements CheckpointExtension {
    constructor()
    // private storages: AmdCheckpointExtension$AmdCheckpointStorage[];
    close(): void;
    createStorage(device: VulkanDevice, queue: VulkanQueue, maxFramesInFlight: number): CheckpointExtension$CheckpointStorage;
    retrieveCheckpoints(isDeviceLost: boolean): CheckpointExtension$QueueCheckpoints[];
}