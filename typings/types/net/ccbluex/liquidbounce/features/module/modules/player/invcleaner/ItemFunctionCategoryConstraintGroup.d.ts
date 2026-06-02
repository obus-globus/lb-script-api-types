import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemFunction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemFunction.d.ts'
import type { ItemNumberConstraintGroup } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraintGroup.d.ts'
export class ItemFunctionCategoryConstraintGroup extends ItemNumberConstraintGroup {
    constructor(acceptableRange: { start: number; endInclusive: number; step: number }, priority: number, function_: ItemFunction)
    readonly function: ItemFunction;
    equals(other: Object | null): boolean;
    hashCode(): number;
}