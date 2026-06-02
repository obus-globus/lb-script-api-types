import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
export interface ItemPacker$ItemAmountConstraintProvider extends Object{
    addItem(item: ItemFacet): void;
    getSatisfactionStatus(item: ItemFacet): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
}