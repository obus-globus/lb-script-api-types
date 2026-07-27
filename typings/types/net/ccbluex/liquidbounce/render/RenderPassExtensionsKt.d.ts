import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
export class RenderPassExtensionsKt extends Object {
    /**
     * Set vertex and index buffers for {@link RenderPass} and call {@link RenderPass.drawIndexed}.
     *
     * This function assumes the {@link GpuBufferSlice}s are correctly aligned with corresponding vertex/index byte count.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt:94}
     */
    static bindAndDraw(self: RenderPass, vertexSlice: GpuBufferSlice, indexSlice: GpuBufferSlice, indexType: IndexType, indexCount: number): void;
    static bindDefaultUniforms(self: RenderPass): void;
    static bindDynamicTransformsUniform(self: RenderPass, gpuBufferSlice: GpuBufferSlice): void;
    static bindFogUniform(self: RenderPass): void;
    static bindGlobalsUniform(self: RenderPass): void;
    static bindLightingUniform(self: RenderPass): void;
    static bindProjectionUniform(self: RenderPass): void;
    static bindTexture(self: RenderPass, name: string, texture: AbstractTexture | null): void;
    static bindTextures(self: RenderPass, textures: JavaMap<string, AbstractTexture | null>): void;
    /**
     * Color-only RenderPass.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt#L155 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt:155}
     */
    static createRenderPass(paramarg0: RenderTarget): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string, paramarg2: Optional<Vector4fc>): RenderPass;
    static createRenderPass(gpuTextureView: RenderTarget, labelGetter: () => string, clearColor: Optional<Vector4fc>, allowOverride: OptionalDouble): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string, paramarg2: Optional<Vector4fc>, paramarg3: OptionalDouble, paramarg4: boolean): RenderPass;
    static createRenderPass(self: RenderTarget, labelGetter: () => string, clearColor: Optional<Vector4fc>, clearDepth: OptionalDouble, useDepthAttachment: boolean, allowOverride: boolean): RenderPass;
    static createRenderPass(paramarg0: GpuTextureView): RenderPass;
    static createRenderPass(paramarg0: GpuTextureView, paramarg1: () => string): RenderPass;
    static createRenderPass(paramarg0: GpuTextureView, paramarg1: () => string, paramarg2: Optional<Vector4fc>): RenderPass;
    static createRenderPass(self: GpuTextureView, labelGetter: () => string, clearColor: Optional<Vector4fc>, allowOverride: boolean): RenderPass;
    static getDynamicTransformsUniform(): GpuBufferSlice;
    static getDynamicTransformsUniform(paramarg0: Matrix4f): GpuBufferSlice;
    static getDynamicTransformsUniform(paramarg0: Matrix4f, paramarg1: Color4b): GpuBufferSlice;
    static getDynamicTransformsUniform(modelView: Matrix4f | null, colorModulator: Color4b, modelOffset: Vector3f | null): GpuBufferSlice;
    static setUniforms(self: RenderPass, uniforms: JavaMap<string, GpuBufferSlice>): void;
    static setupRenderTypeScissor(self: RenderPass): void;
    static unbindTexture(self: RenderPass, name: string): void;
}