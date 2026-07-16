import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientRenderPipelines$JCEF extends Object {
    static BGRA_BLURRED_TEXTURE: RenderPipeline;
    static BGRA_TEXTURE: RenderPipeline;
    static BLURRED_TEXTURE: RenderPipeline;
    /**
     * @see RenderPipelines.ENTITY_OUTLINE_BLIT
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L141 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:141}
     */
    static Blit: RenderPipeline;
    static INSTANCE: ClientRenderPipelines$JCEF;
    static SMOOTH_TEXTURE: RenderPipeline;
    BGRA_BLURRED_TEXTURE: RenderPipeline;
    BGRA_TEXTURE: RenderPipeline;
    BLURRED_TEXTURE: RenderPipeline;
    Blit: RenderPipeline;
    SMOOTH_TEXTURE: RenderPipeline;
}