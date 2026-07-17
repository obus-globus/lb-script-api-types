import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemConstraintInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemConstraintInfo.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
export class ModuleInventoryCleaner$AmountConstraintProvider extends Object {
    constructor(desiredItemsPerCategory: JavaMap<any, any>, desiredValuePerFunction: JavaMap<any, any>)
    readonly desiredItemsPerCategory: JavaMap<any, any>;
    readonly desiredValuePerFunction: JavaMap<any, any>;
    getConstraints(facet: ItemFacet): ItemConstraintInfo[];
}