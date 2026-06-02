import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemCategory } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemConstraintInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemConstraintInfo.d.ts'
import type { ItemFunction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemFunction.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
export class ModuleInventoryCleaner$AmountConstraintProvider extends Object {
    constructor(desiredItemsPerCategory: Object2IntMap<ItemCategory>, desiredValuePerFunction: Reference2IntMap<ItemFunction>)
    readonly desiredItemsPerCategory: Object2IntMap<ItemCategory>;
    readonly desiredValuePerFunction: Reference2IntMap<ItemFunction>;
    getConstraints(facet: ItemFacet): ItemConstraintInfo[];
}