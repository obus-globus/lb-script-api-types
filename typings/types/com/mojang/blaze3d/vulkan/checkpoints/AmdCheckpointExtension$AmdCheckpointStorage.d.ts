import type { GpuBufferSlice$MappedView } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { VulkanDevice } from '../../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanGpuBuffer } from '../../../../../com/mojang/blaze3d/vulkan/VulkanGpuBuffer.d.ts'
import type { VulkanQueue } from '../../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { AbstractCheckpointStorage } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/AbstractCheckpointStorage.d.ts'
import type { CheckpointExtension$CheckpointType } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointType.d.ts'
import type { CheckpointExtension$QueueCheckpoints } from '../../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$QueueCheckpoints.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { VkCommandBuffer } from '../../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class AmdCheckpointExtension$AmdCheckpointStorage extends AbstractCheckpointStorage implements AutoCloseable {
    constructor(device: VulkanDevice, queue: VulkanQueue, maxFramesInFlight: number)
    // private buffer: VulkanGpuBuffer;
    // private mappedView: GpuBufferSlice$MappedView;
    close(): void;
    recordCheckpoint(commandBuffer: VkCommandBuffer, type: CheckpointExtension$CheckpointType, label: () => string): void;
    recordCheckpoint(commandBuffer: VkCommandBuffer, id: number): void;
    retrieveCheckpoints(): CheckpointExtension$QueueCheckpoints;
}