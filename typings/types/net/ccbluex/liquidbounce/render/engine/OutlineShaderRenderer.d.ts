import type { OverlayShaderRenderer } from '../../../../../net/ccbluex/liquidbounce/render/engine/OverlayShaderRenderer.d.ts'
/**
 * For {@link net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP} outline mode.
 *
 * @see net.ccbluex.liquidbounce.event.events.DrawOutlinesEvent
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OutlineShaderRenderer.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OutlineShaderRenderer.kt:30}
 * @deprecated Disabled this feature
 */
export class OutlineShaderRenderer extends OverlayShaderRenderer {
    static INSTANCE: OutlineShaderRenderer;
    shouldRender(): boolean;
}