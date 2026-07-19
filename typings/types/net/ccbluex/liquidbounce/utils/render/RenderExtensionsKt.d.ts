import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
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
import type { KStd140SizeCalculator } from '../../../../../net/ccbluex/liquidbounce/utils/render/KStd140SizeCalculator.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class RenderExtensionsKt extends Object {
    static asTexture(paramarg0: NativeImage): DynamicTexture;
    static asTexture(self: NativeImage, name: string): DynamicTexture;
    static asTexture(self: NativeImage, nameSupplier: () => string): DynamicTexture;
    static asTextureSetup(self: GpuTextureView, sampler: GpuSampler): TextureSetup;
    static asView(self: GpuTexture, baseMipLevel: number, mipLevels: number): GpuTextureView;
    static asyncCopyTo(self: GpuTexture, destination: GpuBuffer, offset: number, mipLevel: number, x: number, y: number, width: number, height: number): CompletableFuture<Object>;
    static begin(self: ByteBufferBuilder, pipeline: RenderPipeline): BufferBuilder;
    static clearColor(self: GpuTexture, color: Color4b): void;
    static clearColorAndDepth(self: RenderTarget, color: Color4b, depth: number): void;
    static clearDepth(self: GpuTexture, depth: number): void;
    static copyFrom(self: GpuBufferSlice, source: GpuBufferSlice): void;
    static copyFrom(self: GpuTexture, source: GpuTexture, mipLevel: number, intoX: number, intoY: number, sourceX: number, sourceY: number, width: number, height: number): void;
    static copyFully(paramarg0: GpuTexture): GpuTexture;
    static copyFully(paramarg0: GpuTexture, paramarg1: () => string): GpuTexture;
    static copyFully(self: GpuTexture, labelGetter: (() => string) | null, usage: number): GpuTexture;
    static copyTo(self: GpuTexture, destination: GpuBuffer, offset: number, mipLevel: number, x: number, y: number, width: number, height: number, callback: () => void): void;
    static copyToNativeImage(self: BufferedImage, target: NativeImage, sourceX: number, sourceY: number, targetX: number, targetY: number, width: number, height: number, scratchBuffer: number[]): number[];
    static createUbo(self: GpuDevice, labelGetter: (() => string) | null, std140Size: (param0: KStd140SizeCalculator) => void): GpuBuffer;
    static getTextureSetup(paramarg0: AbstractTexture): TextureSetup;
    static mapBuffer(self: GpuBuffer, read: boolean, write: boolean): GpuBufferSlice$MappedView;
    static mapBuffer(self: GpuBufferSlice, read: boolean, write: boolean): GpuBufferSlice$MappedView;
    static putVec4(self: Std140Builder, color: Color4b): Std140Builder;
    /**
     * Read and close source. Accepts JPEG and PNG.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt#L432 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt:432}
     */
    static readNativeImage(self: File): NativeImage;
    static readNativeImage(self: InputStream): NativeImage;
    static readNativeImage(self: BufferedSource): NativeImage;
    /**
     * Should be called from main thread.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt#L418 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt:418}
     */
    static registerTexture(self: NativeImage, identifier: Identifier): DynamicTexture;
    static reset(self: PoseStack): void;
    static saveToFile(self: GpuTexture, file: File): CompletableFuture<Object>;
    static std140Size(block: (param0: KStd140SizeCalculator) => void): number;
    static toBufferedImage(self: NativeImage): BufferedImage;
    static toBufferedImage(nativeImage: GpuTexture): CompletableFuture<BufferedImage>;
    static toBufferedImage(self: GpuTexture, mipLevel: number): CompletableFuture<BufferedImage>;
    static toGpuBuffer(self: ByteBuffer, labelGetter: (() => string) | null, usage: number): GpuBuffer;
    /**
     * @see net.minecraft.client.Screenshot.takeScreenshot
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt#L243 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt:243}
     */
    static toNativeImage(self: BufferedImage): NativeImage;
    static toNativeImage(bufferedImage: GpuTexture): CompletableFuture<NativeImage>;
    static toNativeImage(self: GpuTexture, mipLevel: number): CompletableFuture<NativeImage>;
    static uploadRect(self: DynamicTexture, mipLevel: number, x: number, y: number, width: number, height: number): void;
    static withOutputTextureOverride(color: GpuTextureView | null, depth: GpuTextureView | null, block: () => void): void;
    static write(self: GpuBufferSlice, byteBuffer: ByteBuffer): void;
    static write(self: GpuTexture, source: NativeImage, mipLevel: number, depthOrLayer: number, destX: number, destY: number, width: number, height: number, sourceX: number, sourceY: number): void;
    static writeStd140(self: GpuBufferSlice, action: (param0: Std140Builder) => void): GpuBufferSlice;
    static writeStd140(self: ByteBuffer, action: (param0: Std140Builder) => void): void;
}