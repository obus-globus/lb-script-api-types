import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ExtractItemDecorationsCallback extends Object{
    onExtractItemDecorations(arg0: GuiGraphicsExtractor, arg1: Font, arg2: ItemStack, arg3: number, arg4: number): void;
}