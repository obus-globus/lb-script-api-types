import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryRequirements } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryRequirements.d.ts'
/**
 * Constraints for inventory actions.
 * This can be used to ensure that the player is not moving or rotating while interacting with the inventory.
 * It Also allows setting delays for opening, clicking and closing the inventory.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:59}
 */
export class InventoryConstraints extends ValueGroup {
    constructor()
    // private clickDelay: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getClickDelay$net_ccbluex_liquidbounce(): { start: number; endInclusive: number; step: number };
    // private closeDelay: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getCloseDelay$net_ccbluex_liquidbounce(): { start: number; endInclusive: number; step: number };
    // private missChance: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getMissChance$net_ccbluex_liquidbounce(): { start: number; endInclusive: number; step: number };
    // private requirements: InventoryRequirements[];
    /*not mapped: */ getRequirements$net_ccbluex_liquidbounce(): InventoryRequirements[];
    // private startDelay: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getStartDelay$net_ccbluex_liquidbounce(): { start: number; endInclusive: number; step: number };
    /**
     * Whether the constraints are met, this will be checked before any inventory actions are performed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:78}
     */
    passesRequirements(action: InventoryAction): boolean;
    protected requirementChoices(): InventoryRequirements[];
}