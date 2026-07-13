import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export interface ThemeBackground extends Closeable, Object{
    close(): void;
    /**
     * Draws the background on the screen.
     *
     * @param context The drawing context
     * @param width Screen width
     * @param height Screen height
     * @param mouseX Mouse X coordinate
     * @param mouseY Mouse Y coordinate
     * @param delta Time delta for animations
     * @returns true if background was drawn, false to use default Minecraft background
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L240 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:240}
     */
    draw(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    /**
     * Called when resources are reloaded.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L253 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:253}
     */
    onResourceReload(): void;
}