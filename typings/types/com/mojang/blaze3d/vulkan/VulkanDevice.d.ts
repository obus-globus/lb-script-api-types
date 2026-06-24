import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { CompiledRenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/CompiledRenderPipeline.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { ShaderSource } from '../../../../com/mojang/blaze3d/shaders/ShaderSource.d.ts'
import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { DeviceInfo } from '../../../../com/mojang/blaze3d/systems/DeviceInfo.d.ts'
import type { GpuDeviceBackend } from '../../../../com/mojang/blaze3d/systems/GpuDeviceBackend.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { GpuSurfaceBackend } from '../../../../com/mojang/blaze3d/systems/GpuSurfaceBackend.d.ts'
import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VulkanCommandEncoder } from '../../../../com/mojang/blaze3d/vulkan/VulkanCommandEncoder.d.ts'
import type { VulkanDevice$ShaderCompilationKey } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice$ShaderCompilationKey.d.ts'
import type { VulkanGpuBuffer } from '../../../../com/mojang/blaze3d/vulkan/VulkanGpuBuffer.d.ts'
import type { VulkanInstance } from '../../../../com/mojang/blaze3d/vulkan/VulkanInstance.d.ts'
import type { VulkanPhysicalDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanPhysicalDevice.d.ts'
import type { VulkanQueue } from '../../../../com/mojang/blaze3d/vulkan/VulkanQueue.d.ts'
import type { VulkanRenderPipeline } from '../../../../com/mojang/blaze3d/vulkan/VulkanRenderPipeline.d.ts'
import type { CheckpointExtension } from '../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension.d.ts'
import type { GlslCompiler } from '../../../../com/mojang/blaze3d/vulkan/glsl/GlslCompiler.d.ts'
import type { IntermediaryShaderModule } from '../../../../com/mojang/blaze3d/vulkan/glsl/IntermediaryShaderModule.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { VkDevice } from '../../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class VulkanDevice extends Object implements GpuDeviceBackend {
    constructor(defaultShaderSource: (param0: Identifier, param1: ShaderType) => string, instance: VulkanInstance, physicalDevice: VulkanPhysicalDevice, enabledDeviceExtensions: string[], vkDevice: VkDevice, vma: number, checkpointExtension: CheckpointExtension)
    // private checkpointExtension: CheckpointExtension;
    // private commandEncoder: VulkanCommandEncoder;
    // private computeQueue: VulkanQueue;
    // private defaultShaderSource: (param0: Identifier, param1: ShaderType) => string;
    readonly deviceInfo: DeviceInfo;
    // private glslCompiler: GlslCompiler;
    // private graphicsQueue: VulkanQueue;
    // private instance: VulkanInstance;
    // private isIntegratedIntelMoltenVK: boolean;
    // private pipelineCache: Map<RenderPipeline, VulkanRenderPipeline>;
    // private shaderCache: Map<VulkanDevice$ShaderCompilationKey, IntermediaryShaderModule>;
    // private transferQueue: VulkanQueue;
    // private vkDevice: VkDevice;
    // private vma: number;
    checkpointExtension(): CheckpointExtension;
    clearPipelineCache(): void;
    close(): void;
    // private compilePipeline(pipeline: RenderPipeline, shaderSource: (param0: Identifier, param1: ShaderType) => string): VulkanRenderPipeline;
    // private compileShader(key: VulkanDevice$ShaderCompilationKey, shaderSource: (param0: Identifier, param1: ShaderType) => string): IntermediaryShaderModule;
    computeQueue(): VulkanQueue;
    createBuffer(label: () => string, usage: number, data: ByteBuffer): GpuBuffer;
    createBuffer(label: () => string, usage: number, size: number): VulkanGpuBuffer;
    createCommandEncoder(): VulkanCommandEncoder;
    createSampler(addressModeU: AddressMode, addressModeV: AddressMode, minFilter: FilterMode, magFilter: FilterMode, maxAnisotropy: number, maxLod: OptionalDouble): GpuSampler;
    createSurface(windowHandle: number): GpuSurfaceBackend;
    createTexture(label: () => string, usage: number, format: GpuFormat, width: number, height: number, depthOrLayers: number, mipLevels: number): GpuTexture;
    createTexture(label: string, usage: number, format: GpuFormat, width: number, height: number, depthOrLayers: number, mipLevels: number): GpuTexture;
    createTextureView(texture: GpuTexture): GpuTextureView;
    createTextureView(texture: GpuTexture, baseMipLevel: number, mipLevels: number): GpuTextureView;
    createTimestampQueryPool(size: number): GpuQueryPool;
    getDeviceInfo(): DeviceInfo;
    getLastDebugMessages(): string[];
    getOrCompilePipeline(pipeline: RenderPipeline): VulkanRenderPipeline;
    getOrCompileShader(id: Identifier, type: ShaderType, defines: ShaderDefines, shaderSource: (param0: Identifier, param1: ShaderType) => string): IntermediaryShaderModule;
    getTimestampNow(): number;
    graphicsQueue(): VulkanQueue;
    instance(): VulkanInstance;
    isDebuggingEnabled(): boolean;
    precompilePipeline(pipeline: RenderPipeline, customShaderSource: (param0: Identifier, param1: ShaderType) => string): CompiledRenderPipeline;
    transferQueue(): VulkanQueue;
    vkDevice(): VkDevice;
    vma(): number;
}