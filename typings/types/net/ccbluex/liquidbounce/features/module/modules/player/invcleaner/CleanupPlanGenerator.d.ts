import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CleanupPlanPlacementTemplate } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanPlacementTemplate.d.ts'
import type { InventoryCleanupPlan } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/InventoryCleanupPlan.d.ts'
import type { InventorySwap } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/InventorySwap.d.ts'
import type { ItemAndComponents } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemAndComponents.d.ts'
import type { ItemCategory } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemNumberConstraintGroup } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemNumberConstraintGroup.d.ts'
import type { ItemPacker } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.d.ts'
import type { ItemPacker$ItemAmountConstraintProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker$ItemAmountConstraintProvider.d.ts'
import type { ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class CleanupPlanGenerator extends Object implements ItemPacker$ItemAmountConstraintProvider {
    constructor(template: CleanupPlanPlacementTemplate, availableItems: ItemSlot[])
    // private availableItems: ItemSlot[];
    // private categoryToSlotsMap: Map<ItemCategory, ItemSlot[]>;
    // private currentLimit: Object2IntOpenHashMap<ItemNumberConstraintGroup>;
    // private hotbarSwaps: InventorySwap[];
    // private packer: ItemPacker;
    // private template: CleanupPlanPlacementTemplate;
    addItem(item: ItemFacet): void;
    generatePlan(): InventoryCleanupPlan;
    getSatisfactionStatus(item: ItemFacet): ItemPacker$ItemAmountConstraintProvider$SatisfactionStatus;
    // private groupItemsByType(): Map<ItemAndComponents, ItemSlot[]>;
    // private processItemCategory(category: ItemCategory, availableItems: ItemFacet[]): void;
}