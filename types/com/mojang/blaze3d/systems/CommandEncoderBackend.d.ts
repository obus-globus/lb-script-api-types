import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBuffer$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer$MappedView.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { NativeImage } from '../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { NativeImage$Format } from '../../../../com/mojang/blaze3d/platform/NativeImage$Format.d.ts'
import type { GpuQuery } from '../../../../com/mojang/blaze3d/systems/GpuQuery.d.ts'
import type { RenderPassBackend } from '../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CommandEncoderBackend extends Object{
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: number, depthTexture: GpuTexture, clearDepth: number): void;
    clearColorAndDepthTextures(colorTexture: GpuTexture, clearColor: number, depthTexture: GpuTexture, clearDepth: number, regionX: number, regionY: number, regionWidth: number, regionHeight: number): void;
    clearColorTexture(colorTexture: GpuTexture, clearColor: number): void;
    clearDepthTexture(depthTexture: GpuTexture, clearDepth: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number): void;
    copyTextureToBuffer(source: GpuTexture, destination: GpuBuffer, offset: number, callback: () => void, mipLevel: number, x: number, y: number, width: number, height: number): void;
    copyTextureToTexture(source: GpuTexture, destination: GpuTexture, mipLevel: number, destX: number, destY: number, sourceX: number, sourceY: number, width: number, height: number): void;
    copyToBuffer(source: GpuBufferSlice, target: GpuBufferSlice): void;
    createFence(): GpuFence;
    createRenderPass(label: () => string, colorTexture: GpuTextureView, clearColor: OptionalInt): RenderPassBackend;
    createRenderPass(label: () => string, colorTexture: GpuTextureView, clearColor: OptionalInt, depthTexture: GpuTextureView, clearDepth: OptionalDouble): RenderPassBackend;
    isInRenderPass(): boolean;
    mapBuffer(buffer: GpuBufferSlice, read: boolean, write: boolean): GpuBuffer$MappedView;
    presentTexture(texture: GpuTextureView): void;
    timerQueryBegin(): GpuQuery;
    timerQueryEnd(query: GpuQuery): void;
    writeToBuffer(destination: GpuBufferSlice, data: ByteBuffer): void;
    writeToTexture(destination: GpuTexture, source: NativeImage, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number, sourceX: number, sourceY: number): void;
    writeToTexture(destination: GpuTexture, source: ByteBuffer, format: NativeImage$Format, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number): void;
}