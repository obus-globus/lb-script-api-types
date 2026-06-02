import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemNumberConstraintGroup } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraintGroup.d.ts'
export class ItemConstraintInfo extends Object {
    constructor(group: ItemNumberConstraintGroup, amountAddedByItem: number)
    readonly amountAddedByItem: number;
    readonly group: ItemNumberConstraintGroup;
}