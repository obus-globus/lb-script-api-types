import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { LazyRenderTargetHolder } from '../../../../../net/ccbluex/liquidbounce/render/engine/LazyRenderTargetHolder.d.ts'
/**
 * @param blitPipeline should use `core/screenquad` for drawing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OverlayShaderRenderer.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OverlayShaderRenderer.kt:34}
 */
export abstract class OverlayShaderRenderer extends Object implements MinecraftShortcuts {
    constructor(name: string, blitPipeline: RenderPipeline, useDepth: boolean, needDefaultUniforms: boolean)
    // private blitPipeline: RenderPipeline;
    dirty: boolean;
    readonly name: string;
    // private needDefaultUniforms: boolean;
    // private renderTargetHolder: LazyRenderTargetHolder;
    // private sampler: GpuSampler;
    // private useDepth: boolean;
    drawBlitIfDirty(target: RenderTarget): void;
    protected onRender(pass: RenderPass): void;
    protected postRender(): void;
    protected preRender(): void;
    prepareRenderTarget(): RenderTarget;
    shouldRender(): boolean;
}