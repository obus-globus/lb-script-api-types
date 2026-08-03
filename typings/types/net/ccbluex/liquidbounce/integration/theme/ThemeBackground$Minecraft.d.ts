import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThemeBackground } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
/**
 * Returns false to let Minecraft render its default wallpaper.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:56}
 */
export class ThemeBackground$Minecraft extends Object implements ThemeBackground {
    static INSTANCE: ThemeBackground$Minecraft;
    close(): void;
    draw(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    onResourceReload(): void;
}