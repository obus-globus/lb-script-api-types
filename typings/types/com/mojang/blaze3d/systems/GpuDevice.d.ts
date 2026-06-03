import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { CompiledRenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/CompiledRenderPipeline.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { ShaderSource } from '../../../../com/mojang/blaze3d/shaders/ShaderSource.d.ts'
import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuDeviceBackend } from '../../../../com/mojang/blaze3d/systems/GpuDeviceBackend.d.ts'
import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { TextureFormat } from '../../../../com/mojang/blaze3d/textures/TextureFormat.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GpuDeviceAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/core/GpuDeviceAccessor.d.ts'
import type { GpuDeviceAccessor as GpuDeviceAccessor_2 } from '../../../../net/irisshaders/iris/mixin/GpuDeviceAccessor.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class GpuDevice extends Object implements GpuDeviceAccessor, GpuDeviceAccessor_2 {
    constructor(backend: GpuDeviceBackend)
    readonly backend: GpuDeviceBackend;
    clearPipelineCache(): void;
    close(): void;
    createBuffer(label: () => string, usage: number, data: ByteBuffer): GpuBuffer;
    createBuffer(label: () => string, usage: number, size: number): GpuBuffer;
    createCommandEncoder(): CommandEncoder;
    createSampler(addressModeU: AddressMode, addressModeV: AddressMode, minFilter: FilterMode, magFilter: FilterMode, maxAnisotropy: number, maxLod: OptionalDouble): GpuSampler;
    createTexture(label: () => string, usage: number, format: TextureFormat, width: number, height: number, depthOrLayers: number, mipLevels: number): GpuTexture;
    createTexture(label: string, usage: number, format: TextureFormat, width: number, height: number, depthOrLayers: number, mipLevels: number): GpuTexture;
    createTextureView(texture: GpuTexture): GpuTextureView;
    createTextureView(texture: GpuTexture, baseMipLevel: number, mipLevels: number): GpuTextureView;
    getBackendName(): string;
    getEnabledExtensions(): string[];
    getImplementationInformation(): string;
    getLastDebugMessages(): string[];
    getMaxSupportedAnisotropy(): number;
    getMaxTextureSize(): number;
    getRenderer(): string;
    getUniformOffsetAlignment(): number;
    getVendor(): string;
    getVersion(): string;
    isDebuggingEnabled(): boolean;
    isZZeroToOne(): boolean;
    precompilePipeline(pipeline: RenderPipeline): CompiledRenderPipeline;
    precompilePipeline(pipeline: RenderPipeline, shaderSource: (param0: Identifier, param1: ShaderType) => kotlin.String): CompiledRenderPipeline;
    presentFrame(): void;
    setVsync(enabled: boolean): void;
    // private verifyTextureCreationArgs(usage: number, width: number, height: number, depthOrLayers: number, mipLevels: number): void;
    // private verifyTextureViewCreationArgs(texture: GpuTexture, baseMipLevel: number, mipLevels: number): void;
}