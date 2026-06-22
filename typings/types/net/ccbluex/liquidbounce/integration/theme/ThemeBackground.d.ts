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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L230 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:230}
     */
    draw(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    /**
     * Called when resources are reloaded.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L250 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:250}
     */
    onResourceReload(): void;
}