import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$IndexType } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class RenderPassExtensionsKt extends Object {
    /**
     * Set vertex and index buffers for {@link RenderPass} and call {@link RenderPass.drawIndexed}.
     *
     * This function assumes the {@link GpuBufferSlice}s are correctly aligned with corresponding vertex/index byte count.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt:89}
     */
    static bindAndDraw(paramarg0: RenderPass, paramarg1: GpuBufferSlice, paramarg2: GpuBufferSlice, paramarg3: VertexFormat, paramarg4: VertexFormat$IndexType, paramarg5: number): void;
    static bindDefaultUniforms(paramarg0: RenderPass): void;
    static bindDynamicTransformsUniform(paramarg0: RenderPass, paramarg1: GpuBufferSlice): void;
    static bindFogUniform(paramarg0: RenderPass): void;
    static bindGlobalsUniform(paramarg0: RenderPass): void;
    static bindLightingUniform(paramarg0: RenderPass): void;
    static bindProjectionUniform(paramarg0: RenderPass): void;
    static bindTexture(paramarg0: RenderPass, paramarg1: string, paramarg2: AbstractTexture): void;
    static bindTextures(paramarg0: RenderPass, paramarg1: { [key: string]: Object | null }): void;
    /**
     * Color-only RenderPass.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderPassExtensions.kt:152}
     */
    static createRenderPass(paramarg0: RenderTarget): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string, paramarg2: OptionalInt): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string, paramarg2: OptionalInt, paramarg3: OptionalDouble): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string, paramarg2: OptionalInt, paramarg3: OptionalDouble, paramarg4: boolean): RenderPass;
    static createRenderPass(paramarg0: RenderTarget, paramarg1: () => string, paramarg2: OptionalInt, paramarg3: OptionalDouble, paramarg4: boolean, paramarg5: boolean): RenderPass;
    static createRenderPass(paramarg0: GpuTextureView): RenderPass;
    static createRenderPass(paramarg0: GpuTextureView, paramarg1: () => string): RenderPass;
    static createRenderPass(paramarg0: GpuTextureView, paramarg1: () => string, paramarg2: OptionalInt): RenderPass;
    static createRenderPass(paramarg0: GpuTextureView, paramarg1: () => string, paramarg2: OptionalInt, paramarg3: boolean): RenderPass;
    static getDynamicTransformsUniform(): GpuBufferSlice;
    static getDynamicTransformsUniform(paramarg0: Matrix4fc): GpuBufferSlice;
    static getDynamicTransformsUniform(paramarg0: Matrix4fc, paramarg1: Color4b): GpuBufferSlice;
    static getDynamicTransformsUniform(paramarg0: Matrix4fc, paramarg1: Color4b, paramarg2: Vector3fc): GpuBufferSlice;
    static setUniforms(paramarg0: RenderPass, paramarg1: { [key: string]: GpuBufferSlice }): void;
    static setupRenderTypeScissor(paramarg0: RenderPass): void;
    static unbindTexture(paramarg0: RenderPass, paramarg1: string): void;
}