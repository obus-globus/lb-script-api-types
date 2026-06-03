import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBuffer$MappedView } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer$MappedView.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { Std140Builder } from '../../../../../com/mojang/blaze3d/buffers/Std140Builder.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { BufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { BufferedImage } from '../../../../../java/awt/image/BufferedImage.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class RenderExtensionsKt extends Object {
    static asTexture(paramarg0: NativeImage): DynamicTexture;
    static asTexture(paramarg0: NativeImage, paramarg1: string): DynamicTexture;
    static asTexture(paramarg0: NativeImage, paramarg1: () => string): DynamicTexture;
    static asTextureSetup(gpuTextureView: GpuTextureView, sampler: GpuSampler): TextureSetup;
    static asView(gpuTexture: GpuTexture, baseMipLevel: number, mipLevels: number): GpuTextureView;
    static asyncCopyTo(gpuTexture: GpuTexture, destination: GpuBuffer, offset: number, mipLevel: number, x: number, y: number, width: number, height: number): CompletableFuture<Object>;
    static begin(byteBufferBuilder: ByteBufferBuilder, pipeline: RenderPipeline): BufferBuilder;
    static clearColor(gpuTexture: GpuTexture, color: number): void;
    static clearColorAndDepth(renderTarget: RenderTarget, color: number, depth: number): void;
    static clearDepth(gpuTexture: GpuTexture, depth: number): void;
    static copyFrom(gpuBufferSlice: GpuBufferSlice, source: GpuBufferSlice): void;
    static copyFrom(gpuTexture: GpuTexture, source: GpuTexture, mipLevel: number, intoX: number, intoY: number, sourceX: number, sourceY: number, width: number, height: number): void;
    static copyFully(paramarg0: GpuTexture): GpuTexture;
    static copyFully(paramarg0: GpuTexture, paramarg1: () => string): GpuTexture;
    static copyFully(gpuTexture: GpuTexture, labelGetter: () => string, usage: number): GpuTexture;
    static copyTo(gpuTexture: GpuTexture, destination: GpuBuffer, offset: number, mipLevel: number, x: number, y: number, width: number, height: number, callback: () => void): void;
    static createUbo(gpuDevice: GpuDevice, labelGetter: () => string, std140Size: (param0: Object | null) => void): GpuBuffer;
    static getTextureSetup(paramarg0: AbstractTexture): TextureSetup;
    static mapBuffer(paramarg0: GpuBuffer, paramarg1: boolean, paramarg2: boolean): GpuBuffer$MappedView;
    static mapBuffer(paramarg0: GpuBufferSlice, paramarg1: boolean, paramarg2: boolean): GpuBuffer$MappedView;
    static putVec4(std140Builder: Std140Builder, color: Color4b): Std140Builder;
    /**
     * Read and close source. Accepts JPEG and PNG.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt#L332 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt:332}
     */
    static readNativeImage(paramarg0: File): NativeImage;
    static readNativeImage(paramarg0: InputStream): NativeImage;
    static readNativeImage(paramarg0: BufferedSource): NativeImage;
    /**
     * Should be called from main thread.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt#L318 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt:318}
     */
    static registerTexture(nativeImage: NativeImage, identifier: Identifier): DynamicTexture;
    static reset(poseStack: PoseStack): void;
    static saveToFile(gpuTexture: GpuTexture, file: File): CompletableFuture<Object>;
    static std140Size(block: (param0: Object | null) => void): number;
    static toBufferedImage(nativeImage: NativeImage): BufferedImage;
    static toBufferedImage(nativeImage: GpuTexture): CompletableFuture<BufferedImage>;
    static toBufferedImage(gpuTexture: GpuTexture, mipLevel: number): CompletableFuture<BufferedImage>;
    static toGpuBuffer(byteBuffer: ByteBuffer, labelGetter: () => string, usage: number): GpuBuffer;
    /**
     * @see net.minecraft.client.Screenshot.takeScreenshot
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt#L225 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt:225}
     */
    static toNativeImage(bufferedImage: BufferedImage): NativeImage;
    static toNativeImage(bufferedImage: GpuTexture): CompletableFuture<NativeImage>;
    static toNativeImage(gpuTexture: GpuTexture, mipLevel: number): CompletableFuture<NativeImage>;
    static uploadRect(dynamicTexture: DynamicTexture, mipLevel: number, x: number, y: number, width: number, height: number): void;
    static withOutputTextureOverride(color: GpuTextureView, depth: GpuTextureView, block: () => void): void;
    static write(gpuBufferSlice: GpuBufferSlice, byteBuffer: ByteBuffer): void;
    static write(gpuTexture: GpuTexture, source: NativeImage, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number, sourceX: number, sourceY: number): void;
    static writeStd140(paramarg0: GpuBufferSlice, paramarg1: (param0: Object | null) => void): GpuBufferSlice;
    static writeStd140(paramarg0: ByteBuffer, paramarg1: (param0: Object | null) => void): void;
}