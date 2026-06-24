import type { VulkanDevice } from '../../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanQueue } from '../../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { CheckpointExtension$CheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointStorage.d.ts'
import type { CheckpointExtension$QueueCheckpoints } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$QueueCheckpoints.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CheckpointExtension extends AutoCloseable, Object{
    close(): void;
    createStorage(device: VulkanDevice, queue: VulkanQueue, maxFramesInFlight: number): CheckpointExtension$CheckpointStorage;
    retrieveCheckpoints(isDeviceLost: boolean): CheckpointExtension$QueueCheckpoints[];
}