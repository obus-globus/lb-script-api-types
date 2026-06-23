import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemConstraintInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemConstraintInfo.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
export class ModuleInventoryCleaner$AmountConstraintProvider extends Object {
    constructor(desiredItemsPerCategory: { [key: string]: any }, desiredValuePerFunction: { [key: string]: any })
    readonly desiredItemsPerCategory: { [key: string]: any };
    readonly desiredValuePerFunction: { [key: string]: any };
    getConstraints(facet: ItemFacet): ItemConstraintInfo[];
}