import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { FrameBufferAttachment } from '../../../../com/mojang/blaze3d/opengl/FrameBufferAttachment.d.ts'
import type { GlBuffer } from '../../../../com/mojang/blaze3d/opengl/GlBuffer.d.ts'
import type { GlDevice } from '../../../../com/mojang/blaze3d/opengl/GlDevice.d.ts'
import type { GlProgram } from '../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { GlRenderPass } from '../../../../com/mojang/blaze3d/opengl/GlRenderPass.d.ts'
import type { GlRenderPipeline } from '../../../../com/mojang/blaze3d/opengl/GlRenderPipeline.d.ts'
import type { GlTransientMemory } from '../../../../com/mojang/blaze3d/opengl/GlTransientMemory.d.ts'
import type { VertexArrayCache$VertexArray } from '../../../../com/mojang/blaze3d/opengl/VertexArrayCache$VertexArray.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { CommandEncoderBackend } from '../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { RenderPass$Draw } from '../../../../com/mojang/blaze3d/systems/RenderPass$Draw.d.ts'
import type { RenderPassBackend } from '../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { RenderPassDescriptor } from '../../../../com/mojang/blaze3d/systems/RenderPassDescriptor.d.ts'
import type { TransientMemory } from '../../../../com/mojang/blaze3d/systems/TransientMemory.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlCommandEncoderAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/core/GlCommandEncoderAccessor.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
export class GlCommandEncoder extends Object implements CommandEncoderBackend, AutoCloseable, GlCommandEncoderAccessor {
    static MAX_SUBMITS_IN_FLIGHT: number;
    constructor(device: GlDevice)
    // private currentSubmitIndex: number;
    // private device: GlDevice;
    // private drawFbo: number;
    // private fences: number[];
    // private lastPipeline: RenderPipeline;
    // private lastProgram: GlProgram;
    // private lastVertexArray: VertexArrayCache$VertexArray;
    // private programsToClear: (Object | null)[];
    // private readFbo: number;
    // private renderPassColorTextures: FrameBufferAttachment[];
    // private tempFBO: number;
    // private transientMemory: GlTransientMemory;
    // private applyPipelineState(pipeline: RenderPipeline): void;
    awaitSubmit(index: number, timeoutNS: number): boolean;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: Vector4fc, depthTexture: GpuTexture, clearDepth: number): void;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: Vector4fc, depthTexture: GpuTexture, clearDepth: number, regionX: number, regionY: number, regionWidth: number, regionHeight: number): void;
    // private clearColorAndDepthTextures$mixinextras$wrapped$55(arg0: GpuTexture, arg1: Vector4fc, arg2: GpuTexture, arg3: number): void;
    // private clearColorAndDepthTextures$mixinextras$wrapped$57(arg0: GpuTexture, arg1: Vector4fc, arg2: GpuTexture, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    clearColorTexture(colorTexture: GpuTexture, clearColor: Vector4fc): void;
    clearDepthTexture(depthTexture: GpuTexture, clearDepth: number): void;
    // private clearDepthTexture$mixinextras$wrapped$59(arg0: GpuTexture, arg1: number): void;
    close(): void;
    copyBufferToTexture(source: GpuBufferSlice, sourceX: number, sourceY: number, sourceWidth: number, sourceHeight: number, destination: GpuTexture, destinationX: number, destinationY: number, copyWidth: number, copyHeight: number, mipLevel: number, arrayLayer: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number, x: number, y: number, width: number, height: number): void;
    copyTextureToTexture(source: GpuTexture, destination: GpuTexture, mipLevel: number, destX: number, destY: number, sourceX: number, sourceY: number, width: number, height: number): void;
    copyToBuffer(source: GpuBufferSlice, target: GpuBufferSlice): void;
    createFence(): GpuFence;
    createRenderPass(descriptor: RenderPassDescriptor): RenderPassBackend;
    // private createRenderPass$mixinextras$wrapped$61(arg0: RenderPassDescriptor): RenderPassBackend;
    currentSubmitIndex(): number;
    currentSubmitSlot(): number;
    // private drawFromBuffers(renderPass: GlRenderPass, baseVertex: number, firstIndex: number, drawCount: number, indexType: IndexType, pipeline: GlRenderPipeline, instanceCount: number, firstInstance: number): void;
    executeDraw(renderPass: GlRenderPass, baseVertex: number, firstIndex: number, drawCount: number, indexType: IndexType, instanceCount: number, firstInstance: number): void;
    executeDrawIndirect(renderPass: GlRenderPass, indexType: IndexType, commands: GlBuffer, offset: number, drawCount: number): void;
    executeDrawMultiple<T extends unknown>(renderPass: GlRenderPass, draws: RenderPass$Draw<T>[], defaultIndexBuffer: GpuBuffer, defaultIndexType: IndexType, dynamicUniforms: string[], uniformArgument: T): void;
    executeDraws(renderPass: GlRenderPass, indexType: IndexType, firstIndexOffsets: PointerBuffer, indexCounts: IntBuffer, vertexOffsets: IntBuffer, drawCount: number): void;
    presentTexture(textureView: GpuTextureView, swapchainWidth: number, swapchainHeight: number): void;
    // private saturate(arg0: number): number;
    sodium$applyPipelineState(arg0: RenderPipeline): void;
    sodium$setLastProgram(arg0: GlProgram): void;
    submit(): void;
    submitRenderPass(): void;
    transientMemory(): TransientMemory;
    // private trySetup(renderPass: GlRenderPass, dynamicUniforms: string[]): boolean;
    // private validateDraw(renderPass: GlRenderPass, indexType: IndexType): void;
    writeTimestamp(pool: GpuQueryPool, index: number): void;
    writeToBuffer(slice: GpuBufferSlice, data: ByteBuffer): void;
    writeToTexture(destination: GpuTexture, source: ByteBuffer, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number): void;
}