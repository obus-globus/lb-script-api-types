import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThemeBackground } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
/**
 * Returns false to let Minecraft render its default wallpaper.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeBackground.kt:56}
 */
export class ThemeBackground$Minecraft extends Object implements ThemeBackground {
    static INSTANCE: ThemeBackground$Minecraft;
    close(): void;
    draw(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    onResourceReload(): void;
}