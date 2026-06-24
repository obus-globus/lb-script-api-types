import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { BufferStorage } from '../../../../com/mojang/blaze3d/opengl/BufferStorage.d.ts'
import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { FrameBufferCache } from '../../../../com/mojang/blaze3d/opengl/FrameBufferCache.d.ts'
import type { GlCommandEncoder } from '../../../../com/mojang/blaze3d/opengl/GlCommandEncoder.d.ts'
import type { GlDebug } from '../../../../com/mojang/blaze3d/opengl/GlDebug.d.ts'
import type { GlDebugLabel } from '../../../../com/mojang/blaze3d/opengl/GlDebugLabel.d.ts'
import type { GlDevice$ShaderCompilationKey } from '../../../../com/mojang/blaze3d/opengl/GlDevice$ShaderCompilationKey.d.ts'
import type { GlProgram } from '../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { GlRenderPipeline } from '../../../../com/mojang/blaze3d/opengl/GlRenderPipeline.d.ts'
import type { GlShaderModule } from '../../../../com/mojang/blaze3d/opengl/GlShaderModule.d.ts'
import type { VertexArrayCache } from '../../../../com/mojang/blaze3d/opengl/VertexArrayCache.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuDebugOptions } from '../../../../com/mojang/blaze3d/shaders/GpuDebugOptions.d.ts'
import type { ShaderSource } from '../../../../com/mojang/blaze3d/shaders/ShaderSource.d.ts'
import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { CommandEncoderBackend } from '../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { DeviceInfo } from '../../../../com/mojang/blaze3d/systems/DeviceInfo.d.ts'
import type { GpuDeviceBackend } from '../../../../com/mojang/blaze3d/systems/GpuDeviceBackend.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { GpuSurfaceBackend } from '../../../../com/mojang/blaze3d/systems/GpuSurfaceBackend.d.ts'
import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class GlDevice extends Object implements GpuDeviceBackend {
    constructor(windowHandle: number, defaultShaderSource: (param0: Identifier, param1: ShaderType) => string, debugOptions: GpuDebugOptions)
    readonly bufferStorage: BufferStorage;
    // private debugLabels: GlDebugLabel;
    // private debugLog: GlDebug;
    // private defaultShaderSource: (param0: Identifier, param1: ShaderType) => string;
    readonly deviceInfo: DeviceInfo;
    // private directStateAccess: DirectStateAccess;
    // private encoder: GlCommandEncoder;
    // private frameBufferCache: FrameBufferCache;
    // private missingShaders: (Object | null)[];
    // private pipelineCache: Map<RenderPipeline, GlRenderPipeline>;
    // private shaderCache: Map<GlDevice$ShaderCompilationKey, GlShaderModule>;
    // private vertexArrayCache: VertexArrayCache;
    clearPipelineCache(): void;
    close(): void;
    // private compilePipeline(pipeline: RenderPipeline, shaderSource: (param0: Identifier, param1: ShaderType) => string): GlRenderPipeline;
    // private compileProgram(pipeline: RenderPipeline, shaderSource: (param0: Identifier, param1: ShaderType) => string): GlProgram;
    // private compileShader(key: GlDevice$ShaderCompilationKey, shaderSource: (param0: Identifier, param1: ShaderType) => string): GlShaderModule;
    createBuffer(label: () => string, usage: number, data: ByteBuffer): GpuBuffer;
    createBuffer(label: () => string, usage: number, size: number): GpuBuffer;
    createCommandEncoder(): CommandEncoderBackend;
    createSampler(addressModeU: AddressMode, addressModeV: AddressMode, minFilter: FilterMode, magFilter: FilterMode, maxAnisotropy: number, maxLod: OptionalDouble): GpuSampler;
    createSurface(windowHandle: number): GpuSurfaceBackend;
    createTexture(label: () => string, usage: number, format: GpuFormat, width: number, height: number, depthOrLayers: number, mipLevels: number): GpuTexture;
    createTexture(label: string, usage: number, format: GpuFormat, width: number, height: number, depthOrLayers: number, mipLevels: number): GpuTexture;
    createTextureView(texture: GpuTexture): GpuTextureView;
    createTextureView(texture: GpuTexture, baseMipLevel: number, mipLevels: number): GpuTextureView;
    createTimestampQueryPool(size: number): GpuQueryPool;
    debugLabels(): GlDebugLabel;
    directStateAccess(): DirectStateAccess;
    frameBufferCache(): FrameBufferCache;
    getBufferStorage(): BufferStorage;
    getDeviceInfo(): DeviceInfo;
    getLastDebugMessages(): string[];
    getOrCompilePipeline(pipeline: RenderPipeline): GlRenderPipeline;
    getOrCompileShader(id: Identifier, type: ShaderType, defines: ShaderDefines, shaderSource: (param0: Identifier, param1: ShaderType) => string): GlShaderModule;
    getTimestampNow(): number;
    isDebuggingEnabled(): boolean;
    precompilePipeline(pipeline: RenderPipeline, customShaderSource: (param0: Identifier, param1: ShaderType) => string): GlRenderPipeline;
    vertexArrayCache(): VertexArrayCache;
}