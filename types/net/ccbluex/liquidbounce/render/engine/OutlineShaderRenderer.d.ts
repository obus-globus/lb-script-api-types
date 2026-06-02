import type { OverlayShaderRenderer } from '../../../../../net/ccbluex/liquidbounce/render/engine/OverlayShaderRenderer.d.ts'
/**
 * For {@link net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP} outline mode.
 *
 * @see net.ccbluex.liquidbounce.event.events.DrawOutlinesEvent
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OutlineShaderRenderer.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OutlineShaderRenderer.kt:25}
 */
export class OutlineShaderRenderer extends OverlayShaderRenderer {
    static INSTANCE: OutlineShaderRenderer;
    shouldRender(): boolean;
}