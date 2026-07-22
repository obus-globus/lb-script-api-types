import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryRequirements } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryRequirements.d.ts'
/**
 * Constraints for inventory actions.
 * This can be used to ensure that the player is not moving or rotating while interacting with the inventory.
 * It Also allows setting delays for opening, clicking and closing the inventory.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:59}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:78}
     */
    passesRequirements(action: InventoryAction): boolean;
    protected requirementChoices(): InventoryRequirements[];
}