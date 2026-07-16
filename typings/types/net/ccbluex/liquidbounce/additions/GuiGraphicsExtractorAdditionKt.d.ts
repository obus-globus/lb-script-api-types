import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class GuiGraphicsExtractorAdditionKt extends Object {
    static drawBorder(self: GuiGraphicsExtractor, x: number, y: number, width: number, height: number, color: number): void;
    static drawCooldownProgress(self: GuiGraphicsExtractor, stack: ItemStack, x: number, y: number): void;
    static drawItemBar(self: GuiGraphicsExtractor, stack: ItemStack, x: number, y: number): void;
    static drawStackCount(self: GuiGraphicsExtractor, textRenderer: Font, stack: ItemStack, x: number, y: number, stackCountText: string | null): void;
}