import type { VulkanDevice } from '../../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanQueue } from '../../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { CheckpointExtension } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension.d.ts'
import type { CheckpointExtension$CheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointStorage.d.ts'
import type { CheckpointExtension$QueueCheckpoints } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$QueueCheckpoints.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NoopCheckpointExtension extends Object implements CheckpointExtension {
    static INSTANCE: NoopCheckpointExtension;
    constructor()
    close(): void;
    createStorage(device: VulkanDevice, queue: VulkanQueue, maxFramesInFlight: number): CheckpointExtension$CheckpointStorage;
    retrieveCheckpoints(isDeviceLost: boolean): CheckpointExtension$QueueCheckpoints[];
}