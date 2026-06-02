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
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
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
    static asTextureSetup(paramarg0: GpuTextureView, paramarg1: GpuSampler): TextureSetup;
    static asView(paramarg0: GpuTexture, paramarg1: number, paramarg2: number): GpuTextureView;
    static asyncCopyTo(paramarg0: GpuTexture, paramarg1: GpuBuffer, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): CompletableFuture<Object>;
    static begin(paramarg0: ByteBufferBuilder, paramarg1: RenderPipeline): BufferBuilder;
    static clearColor(paramarg0: GpuTexture, paramarg1: number): void;
    static clearColorAndDepth(paramarg0: RenderTarget, paramarg1: number, paramarg2: number): void;
    static clearDepth(paramarg0: GpuTexture, paramarg1: number): void;
    static copyFrom(paramarg0: GpuBufferSlice, paramarg1: GpuBufferSlice): void;
    static copyFrom(paramarg0: GpuTexture, paramarg1: GpuTexture, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static copyFully(paramarg0: GpuTexture): GpuTexture;
    static copyFully(paramarg0: GpuTexture, paramarg1: () => string): GpuTexture;
    static copyFully(paramarg0: GpuTexture, paramarg1: () => string, paramarg2: number): GpuTexture;
    static copyTo(paramarg0: GpuTexture, paramarg1: GpuBuffer, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: () => void): void;
    static createUbo(paramarg0: GpuDevice, paramarg1: () => string, paramarg2: Function1<Object, void>): GpuBuffer;
    static getTextureSetup(paramarg0: AbstractTexture): TextureSetup;
    static mapBuffer(paramarg0: GpuBuffer, paramarg1: boolean, paramarg2: boolean): GpuBuffer$MappedView;
    static mapBuffer(paramarg0: GpuBufferSlice, paramarg1: boolean, paramarg2: boolean): GpuBuffer$MappedView;
    static putVec4(paramarg0: Std140Builder, paramarg1: Color4b): Std140Builder;
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
    static registerTexture(paramarg0: NativeImage, paramarg1: Identifier): DynamicTexture;
    static reset(paramarg0: PoseStack): void;
    static saveToFile(paramarg0: GpuTexture, paramarg1: File): CompletableFuture<Object>;
    static std140Size(paramarg0: Function1<Object, void>): number;
    static toBufferedImage(paramarg0: NativeImage): BufferedImage;
    static toBufferedImage(paramarg0: GpuTexture): CompletableFuture<BufferedImage>;
    static toBufferedImage(paramarg0: GpuTexture, paramarg1: number): CompletableFuture<BufferedImage>;
    static toGpuBuffer(paramarg0: ByteBuffer, paramarg1: () => string, paramarg2: number): GpuBuffer;
    /**
     * @see net.minecraft.client.Screenshot.takeScreenshot
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt#L225 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/RenderExtensions.kt:225}
     */
    static toNativeImage(paramarg0: BufferedImage): NativeImage;
    static toNativeImage(paramarg0: GpuTexture): CompletableFuture<NativeImage>;
    static toNativeImage(paramarg0: GpuTexture, paramarg1: number): CompletableFuture<NativeImage>;
    static uploadRect(paramarg0: DynamicTexture, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static withOutputTextureOverride(paramarg0: GpuTextureView, paramarg1: GpuTextureView, paramarg2: Function0<void>): void;
    static write(paramarg0: GpuBufferSlice, paramarg1: ByteBuffer): void;
    static write(paramarg0: GpuTexture, paramarg1: NativeImage, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number): void;
    static writeStd140(paramarg0: GpuBufferSlice, paramarg1: Function1<Object, void>): GpuBufferSlice;
    static writeStd140(paramarg0: ByteBuffer, paramarg1: Function1<Object, void>): void;
}