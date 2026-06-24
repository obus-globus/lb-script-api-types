import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThemeBackground } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
/**
 * Returns false to let Minecraft render its default wallpaper.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:53}
 */
export class ThemeBackground$Minecraft extends Object implements ThemeBackground {
    static INSTANCE: ThemeBackground$Minecraft;
    close(): void;
    draw(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    onResourceReload(): void;
}