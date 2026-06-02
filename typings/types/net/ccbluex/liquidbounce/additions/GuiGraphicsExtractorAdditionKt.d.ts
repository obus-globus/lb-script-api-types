import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class GuiGraphicsExtractorAdditionKt extends Object {
    static drawBorder(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static drawCooldownProgress(paramarg0: GuiGraphicsExtractor, paramarg1: ItemStack, paramarg2: number, paramarg3: number): void;
    static drawItemBar(paramarg0: GuiGraphicsExtractor, paramarg1: ItemStack, paramarg2: number, paramarg3: number): void;
    static drawStackCount(paramarg0: GuiGraphicsExtractor, paramarg1: Font, paramarg2: ItemStack, paramarg3: number, paramarg4: number, paramarg5: string): void;
}