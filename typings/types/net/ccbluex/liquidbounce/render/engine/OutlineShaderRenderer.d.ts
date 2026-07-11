import type { OverlayShaderRenderer } from '../../../../../net/ccbluex/liquidbounce/render/engine/OverlayShaderRenderer.d.ts'
/**
 * For {@link net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP} outline mode.
 *
 * @see net.ccbluex.liquidbounce.event.events.DrawOutlinesEvent
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OutlineShaderRenderer.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/OutlineShaderRenderer.kt:30}
 * @deprecated Disabled this feature
 */
export class OutlineShaderRenderer extends OverlayShaderRenderer {
    static INSTANCE: OutlineShaderRenderer;
    shouldRender(): boolean;
}