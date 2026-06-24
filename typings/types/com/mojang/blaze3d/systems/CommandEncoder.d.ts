import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { NativeImage } from '../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { CommandEncoderBackend } from '../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { GpuDeviceBackend } from '../../../../com/mojang/blaze3d/systems/GpuDeviceBackend.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { RenderPass$RenderArea } from '../../../../com/mojang/blaze3d/systems/RenderPass$RenderArea.d.ts'
import type { RenderPassDescriptor } from '../../../../com/mojang/blaze3d/systems/RenderPassDescriptor.d.ts'
import type { TracyGpuProfiler } from '../../../../com/mojang/blaze3d/systems/TracyGpuProfiler.d.ts'
import type { TransientMemory } from '../../../../com/mojang/blaze3d/systems/TransientMemory.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandEncoderAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/core/CommandEncoderAccessor.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
export class CommandEncoder extends Object implements CommandEncoderAccessor {
    constructor(profiler: TracyGpuProfiler, device: GpuDeviceBackend, backend: CommandEncoderBackend)
    // private backend: CommandEncoderBackend;
    // private device: GpuDeviceBackend;
    // private isInRenderPass: boolean;
    // private profiler: TracyGpuProfiler;
    backend(): CommandEncoderBackend;
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
    createRenderPass(descriptor: RenderPassDescriptor): RenderPass;
    createRenderPass(label: () => string, colorTexture: GpuTextureView, clearColor: Optional<Vector4fc>): RenderPass;
    createRenderPass(label: () => string, colorTexture: GpuTextureView, clearColor: Optional<Vector4fc>, depthTexture: GpuTextureView, clearDepth: OptionalDouble): RenderPass;
    createRenderPass(label: () => string, colorTexture: GpuTextureView, clearColor: Optional<Vector4fc>, depthTexture: GpuTextureView, clearDepth: OptionalDouble, renderArea: RenderPass$RenderArea): RenderPass;
    isInRenderPass(): boolean;
    sodium$getBackend(): CommandEncoderBackend;
    submit(): void;
    submitRenderPass(): void;
    transientMemory(): TransientMemory;
    // private verifyColorTexture(colorTexture: GpuTexture): void;
    // private verifyDepthTexture(depthTexture: GpuTexture): void;
    // private verifyRegion(colorTexture: GpuTexture, regionX: number, regionY: number, regionWidth: number, regionHeight: number): void;
    writeTimestamp(pool: GpuQueryPool, index: number): void;
    writeToBuffer(destination: GpuBufferSlice, data: ByteBuffer): void;
    writeToTexture(destination: GpuTexture, source: NativeImage): void;
    writeToTexture(destination: GpuTexture, source: NativeImage, mipLevel: number, depthOrLayer: number, destX: number, destY: number): void;
    writeToTexture(destination: GpuTexture, source: ByteBuffer, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number): void;
}