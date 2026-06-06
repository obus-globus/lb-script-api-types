import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Addition to {@link net.minecraft.client.gui.GuiGraphicsExtractor}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/additions/GuiGraphicsExtractorAddition.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/additions/GuiGraphicsExtractorAddition.kt:28}
 */
export interface GuiGraphicsExtractorAddition extends Object{
    liquidbounce$drawCooldownProgress(stack: ItemStack, x: number, y: number): void;
    liquidbounce$drawItemBar(stack: ItemStack, x: number, y: number): void;
    liquidbounce$drawStackCount(textRenderer: Font, stack: ItemStack, x: number, y: number, stackCountText: string | null): void;
}