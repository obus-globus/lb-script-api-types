import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { RenderPassBackend } from '../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { RenderPassDescriptor } from '../../../../com/mojang/blaze3d/systems/RenderPassDescriptor.d.ts'
import type { TransientMemory } from '../../../../com/mojang/blaze3d/systems/TransientMemory.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
export interface CommandEncoderBackend extends Object {
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: Vector4fc, depthTexture: GpuTexture, clearDepth: number): void;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: Vector4fc, depthTexture: GpuTexture, clearDepth: number, regionX: number, regionY: number, regionWidth: number, regionHeight: number): void;
    clearColorTexture(colorTexture: GpuTexture, clearColor: Vector4fc): void;
    clearDepthTexture(depthTexture: GpuTexture, clearDepth: number): void;
    copyBufferToTexture(source: GpuBufferSlice, sourceX: number, sourceY: number, sourceWidth: number, sourceHeight: number, destination: GpuTexture, destinationX: number, destinationY: number, copyWidth: number, copyHeight: number, mipLevel: number, arrayLayer: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number, x: number, y: number, width: number, height: number): void;
    copyTextureToTexture(source: GpuTexture, destination: GpuTexture, mipLevel: number, destX: number, destY: number, sourceX: number, sourceY: number, width: number, height: number): void;
    copyToBuffer(source: GpuBufferSlice, target: GpuBufferSlice): void;
    createFence(): GpuFence;
    createRenderPass(descriptor: RenderPassDescriptor): RenderPassBackend;
    submit(): void;
    submitRenderPass(): void;
    transientMemory(): TransientMemory;
    writeTimestamp(pool: GpuQueryPool, index: number): void;
    writeToBuffer(destination: GpuBufferSlice, data: ByteBuffer): void;
    writeToTexture(destination: GpuTexture, source: ByteBuffer, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number): void;
}