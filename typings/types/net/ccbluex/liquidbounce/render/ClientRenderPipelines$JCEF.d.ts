import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientRenderPipelines$JCEF extends Object {
    static BGRA_BLURRED_TEXTURE: RenderPipeline;
    static BGRA_TEXTURE: RenderPipeline;
    static BLURRED_TEXTURE: RenderPipeline;
    /**
     * @see RenderPipelines.ENTITY_OUTLINE_BLIT
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L140 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:140}
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