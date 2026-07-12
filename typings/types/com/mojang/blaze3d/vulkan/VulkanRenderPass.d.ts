import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { RenderPass$Draw } from '../../../../com/mojang/blaze3d/systems/RenderPass$Draw.d.ts'
import type { RenderPass$RenderArea } from '../../../../com/mojang/blaze3d/systems/RenderPass$RenderArea.d.ts'
import type { RenderPassBackend } from '../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VulkanCommandEncoder } from '../../../../com/mojang/blaze3d/vulkan/VulkanCommandEncoder.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanRenderPass$TextureViewAndSampler } from '../../../../com/mojang/blaze3d/vulkan/VulkanRenderPass$TextureViewAndSampler.d.ts'
import type { VulkanRenderPipeline } from '../../../../com/mojang/blaze3d/vulkan/VulkanRenderPipeline.d.ts'
import type { CheckpointExtension$CheckpointStorage } from '../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$CheckpointStorage.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VulkanRenderPassAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/core/VulkanRenderPassAccessor.d.ts'
import type { CustomPass } from '../../../../net/irisshaders/iris/mixinterface/CustomPass.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class VulkanRenderPass extends Object implements RenderPassBackend, VulkanRenderPassAccessor {
    static VALIDATION: boolean;
    constructor(device: VulkanDevice, encoder: VulkanCommandEncoder, commandBuffer: VkCommandBuffer, checkpointStorage: CheckpointExtension$CheckpointStorage, renderArea: RenderPass$RenderArea, outputWidth: number, outputHeight: number, hasDepth: boolean, label: () => string)
    // private anyDescriptorDirty: boolean;
    // private checkpointStorage: CheckpointExtension$CheckpointStorage;
    // private commandBuffer: VkCommandBuffer;
    // private device: VulkanDevice;
    // private encoder: VulkanCommandEncoder;
    // private hasDepth: boolean;
    readonly label: () => string;
    // private liquid_bounce$previousPipeline: RenderPipeline;
    // private outputHeight: number;
    // private outputWidth: number;
    pipeline: VulkanRenderPipeline;
    // private pushedDebugGroups: number;
    // private renderArea: RenderPass$RenderArea;
    // private textures: { [key: string]: VulkanRenderPass$TextureViewAndSampler };
    // private uniforms: { [key: string]: GpuBufferSlice };
    bindTexture(name: string, textureView: GpuTextureView, sampler: GpuSampler): void;
    // private commandBuffer(): VkCommandBuffer;
    disableScissor(): void;
    draw(vertexCount: number, instanceCount: number, firstVertex: number, firstInstance: number): void;
    drawIndexed(indexCount: number, instanceCount: number, firstIndex: number, vertexOffset: number, firstInstance: number): void;
    drawIndexedIndirect(commands: GpuBufferSlice, drawCount: number): void;
    drawIndirect(commands: GpuBufferSlice, drawCount: number): void;
    drawMultipleIndexed<T extends unknown>(draws: RenderPass$Draw<T>[], defaultIndexBuffer: GpuBuffer, defaultIndexType: IndexType, dynamicUniforms: string[], uniformArgument: T): void;
    enableScissor(x: number, y: number, width: number, height: number): void;
    getLabel(): () => string;
    iris$getCustomPass(): CustomPass;
    iris$setCustomPass(arg0: CustomPass): void;
    multiDraw(firstVertices: IntBuffer, vertexCounts: IntBuffer, drawCount: number): void;
    multiDraw(drawParameters: IntBuffer, instanceCount: number, firstInstance: number, drawCount: number): void;
    multiDrawIndexed(drawParameters: IntBuffer, instanceCount: number, firstInstance: number, drawCount: number): void;
    multiDrawIndexed(firstIndexOffsets: PointerBuffer, indexCounts: IntBuffer, vertexOffsets: IntBuffer, drawCount: number): void;
    popDebugGroup(): void;
    pushDebugGroup(label: () => string): void;
    // private pushDescriptors(): void;
    setIndexBuffer(indexBuffer: GpuBuffer, indexType: IndexType): void;
    setPipeline(pipeline: RenderPipeline): void;
    setUniform(name: string, value: GpuBuffer): void;
    setUniform(name: string, value: GpuBufferSlice): void;
    setVertexBuffer(slot: number, vertexBuffer: GpuBufferSlice): void;
    sodium$getCommandBuffer(): VkCommandBuffer;
    sodium$getPipeline(): VulkanRenderPipeline;
    writeTimestamp(pool: GpuQueryPool, index: number): void;
}