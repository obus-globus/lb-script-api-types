import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { CommandEncoderBackend } from '../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { RenderPassBackend } from '../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { RenderPassDescriptor } from '../../../../com/mojang/blaze3d/systems/RenderPassDescriptor.d.ts'
import type { TransientMemory } from '../../../../com/mojang/blaze3d/systems/TransientMemory.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { DestructionQueue } from '../../../../com/mojang/blaze3d/vulkan/DestructionQueue.d.ts'
import type { VulkanCommandPool } from '../../../../com/mojang/blaze3d/vulkan/VulkanCommandPool.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanQueue$Submission } from '../../../../com/mojang/blaze3d/vulkan/VulkanQueue$Submission.d.ts'
import type { VulkanRenderPass } from '../../../../com/mojang/blaze3d/vulkan/VulkanRenderPass.d.ts'
import type { VulkanTransientMemory } from '../../../../com/mojang/blaze3d/vulkan/VulkanTransientMemory.d.ts'
import type { CheckpointExtension$CheckpointStorage } from '../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointStorage.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class VulkanCommandEncoder extends Object implements CommandEncoderBackend, Destroyable {
    static MAX_SUBMITS_IN_FLIGHT: number;
    static memoryBarrier(paramcommandBuffer: VkCommandBuffer, paramstack: MemoryStack): void;
    constructor(device: VulkanDevice)
    // private checkpointStorage: CheckpointExtension$CheckpointStorage;
    // private commandPools: VulkanCommandPool[];
    // private completedSubmitIndex: number;
    // private currentCommandBuffer: VkCommandBuffer;
    // private currentRenderPass: VulkanRenderPass;
    // private currentSubmitIndex: number;
    // private destroyQueue: DestructionQueue<() => void>;
    // private device: VulkanDevice;
    // private submissionBuilder: VulkanQueue$Submission;
    // private submitSemaphore: number;
    // private transientMemory: VulkanTransientMemory;
    allocateAndBeginTransientCommandBuffer(): VkCommandBuffer;
    // private awaitSubmitCompletion(submitIndex: number, timeoutNS: number): boolean;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: Vector4fc, depthTexture: GpuTexture, clearDepth: number): void;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: Vector4fc, depthTexture: GpuTexture, clearDepth: number, regionX: number, regionY: number, regionWidth: number, regionHeight: number): void;
    clearColorTexture(colorTexture: GpuTexture, clearColor: Vector4fc): void;
    // private clearColorTextureUnsynced(stack: MemoryStack, colorTexture: GpuTexture, clearColor: Vector4fc): void;
    clearDepthTexture(depthTexture: GpuTexture, clearDepth: number): void;
    clearDepthTextureUnsynced(stack: MemoryStack, depthTexture: GpuTexture, clearDepth: number): void;
    // private commandBuffer(): VkCommandBuffer;
    copyBufferToTexture(source: GpuBufferSlice, sourceX: number, sourceY: number, sourceWidth: number, sourceHeight: number, destination: GpuTexture, destinationX: number, destinationY: number, copyWidth: number, copyHeight: number, mipLevel: number, arrayLayer: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number, x: number, y: number, width: number, height: number): void;
    copyTextureToTexture(source: GpuTexture, destination: GpuTexture, mipLevel: number, destX: number, destY: number, sourceX: number, sourceY: number, width: number, height: number): void;
    copyToBuffer(source: GpuBufferSlice, target: GpuBufferSlice): void;
    createFence(): GpuFence;
    createRenderPass(descriptor: RenderPassDescriptor): RenderPassBackend;
    // private currentCommandPool(): VulkanCommandPool;
    destroy(): void;
    // private endCommandBuffer(): void;
    execute(commandBuffer: VkCommandBuffer): void;
    getTimestampNow(): number;
    // private memoryBarrier(stack: MemoryStack): void;
    queueForDestroy(destroyable: () => void): void;
    signalSemaphore(vkSemaphore: number, value: number, stageMask: number): void;
    submit(): void;
    submitRenderPass(): void;
    textureInitCommandBuffer(): VkCommandBuffer;
    transientMemory(): TransientMemory;
    waitSemaphore(vkSemaphore: number, value: number, stageMask: number): void;
    writeTimestamp(pool: GpuQueryPool, index: number): void;
    writeToBuffer(destination: GpuBufferSlice, data: ByteBuffer): void;
    writeToTexture(destination: GpuTexture, source: ByteBuffer, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number): void;
}