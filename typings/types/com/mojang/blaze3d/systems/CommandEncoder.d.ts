import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBuffer$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer$MappedView.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { NativeImage } from '../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { NativeImage$Format } from '../../../../com/mojang/blaze3d/platform/NativeImage$Format.d.ts'
import type { CommandEncoderBackend } from '../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { GpuDeviceBackend } from '../../../../com/mojang/blaze3d/systems/GpuDeviceBackend.d.ts'
import type { GpuQuery } from '../../../../com/mojang/blaze3d/systems/GpuQuery.d.ts'
import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandEncoderAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/core/CommandEncoderAccessor.d.ts'
export class CommandEncoder extends Object implements CommandEncoderAccessor {
    constructor(device: GpuDeviceBackend, backend: CommandEncoderBackend)
    // private backend: CommandEncoderBackend;
    // private device: GpuDeviceBackend;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: number, depthTexture: GpuTexture, clearDepth: number): void;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: number, depthTexture: GpuTexture, clearDepth: number, regionX: number, regionY: number, regionWidth: number, regionHeight: number): void;
    clearColorTexture(colorTexture: GpuTexture, clearColor: number): void;
    clearDepthTexture(depthTexture: GpuTexture, clearDepth: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number, x: number, y: number, width: number, height: number): void;
    copyTextureToTexture(source: GpuTexture, destination: GpuTexture, mipLevel: number, destX: number, destY: number, sourceX: number, sourceY: number, width: number, height: number): void;
    copyToBuffer(source: GpuBufferSlice, target: GpuBufferSlice): void;
    createFence(): GpuFence;
    createRenderPass(label: () => string, colorTexture: GpuTextureView, clearColor: OptionalInt): RenderPass;
    createRenderPass(label: () => string, colorTexture: GpuTextureView, clearColor: OptionalInt, depthTexture: GpuTextureView, clearDepth: OptionalDouble): RenderPass;
    mapBuffer(buffer: GpuBuffer, read: boolean, write: boolean): GpuBuffer$MappedView;
    mapBuffer(slice: GpuBufferSlice, read: boolean, write: boolean): GpuBuffer$MappedView;
    presentTexture(textureView: GpuTextureView): void;
    sodium$getBackend(): CommandEncoderBackend;
    timerQueryBegin(): GpuQuery;
    timerQueryEnd(query: GpuQuery): void;
    // private verifyColorTexture(colorTexture: GpuTexture): void;
    // private verifyDepthTexture(depthTexture: GpuTexture): void;
    // private verifyRegion(colorTexture: GpuTexture, regionX: number, regionY: number, regionWidth: number, regionHeight: number): void;
    writeToBuffer(destination: GpuBufferSlice, data: ByteBuffer): void;
    writeToTexture(destination: GpuTexture, source: NativeImage): void;
    writeToTexture(destination: GpuTexture, source: NativeImage, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number, sourceX: number, sourceY: number): void;
    writeToTexture(destination: GpuTexture, source: ByteBuffer, format: NativeImage$Format, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number): void;
}