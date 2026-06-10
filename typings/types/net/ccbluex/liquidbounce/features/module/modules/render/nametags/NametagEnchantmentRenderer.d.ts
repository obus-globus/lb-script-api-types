import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EnchantmentInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/nametags/EnchantmentInfo.d.ts'
import type { NametagEnchantmentRenderer$EnchantCell } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagEnchantmentRenderer$EnchantCell.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class NametagEnchantmentRenderer extends ToggleableValueGroup {
    static INSTANCE: NametagEnchantmentRenderer;
    // private BG_COLOR_CURSE: Color4b;
    // private BG_COLOR_NORMAL: Color4b;
    // private ITEM_CENTER_X: number;
    // private ITEM_SIZE: number;
    // private LABEL_PADDING_X: number;
    // private LABEL_PADDING_Y: number;
    // private LABEL_ROW_SPACING: number;
    // private LABEL_VERTICAL_GAP: number;
    // private backgroundRadius: number;
    // private /*not mapped: */ getBackgroundRadius(): number;
    // private enchantmentInfoComparator: (param0: Object) => boolean;
    // private /*not mapped: */ getLabelBackgroundRadius(): number;
    // private /*not mapped: */ getLabelTextScale(): number;
    // private maxCountPerItem: number;
    // private /*not mapped: */ getMaxCountPerItem(): number;
    // private scale: number;
    // private /*not mapped: */ getScale(): number;
    // private createCell(info: EnchantmentInfo | null, isEllipsis: boolean): NametagEnchantmentRenderer$EnchantCell;
    // private drawCell(guiGraphics: GuiGraphicsExtractor, cell: NametagEnchantmentRenderer$EnchantCell, centerX: number, y: number, rowHeight: number): void;
    drawItemEnchantments(guiGraphics: GuiGraphicsExtractor, stack: ItemStack, x: number, y: number): void;
    // private processItemEnchantments(itemStack: ItemStack): NametagEnchantmentRenderer$EnchantCell[];
}