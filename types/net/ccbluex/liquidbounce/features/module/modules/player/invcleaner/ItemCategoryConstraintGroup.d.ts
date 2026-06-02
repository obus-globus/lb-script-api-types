import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemCategory } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemNumberConstraintGroup } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraintGroup.d.ts'
export class ItemCategoryConstraintGroup extends ItemNumberConstraintGroup {
    constructor(acceptableRange: { start: number; endInclusive: number; step: number }, priority: number, category: ItemCategory)
    readonly category: ItemCategory;
    equals(other: Object | null): boolean;
    hashCode(): number;
}