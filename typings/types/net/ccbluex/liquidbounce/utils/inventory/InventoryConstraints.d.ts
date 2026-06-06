import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryRequirements } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryRequirements.d.ts'
/**
 * Constraints for inventory actions.
 * This can be used to ensure that the player is not moving or rotating while interacting with the inventory.
 * It Also allows setting delays for opening, clicking and closing the inventory.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:54}
 */
export class InventoryConstraints extends ValueGroup {
    constructor()
    // private clickDelay: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getClickDelay$liquidbounce(): { start: number; endInclusive: number; step: number };
    // private closeDelay: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getCloseDelay$liquidbounce(): { start: number; endInclusive: number; step: number };
    // private missChance: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getMissChance$liquidbounce(): { start: number; endInclusive: number; step: number };
    // private requirements: InventoryRequirements[];
    /*not mapped: */ getRequirements$liquidbounce(): InventoryRequirements[];
    // private startDelay: { start: number; endInclusive: number; step: number };
    /*not mapped: */ getStartDelay$liquidbounce(): { start: number; endInclusive: number; step: number };
    /**
     * Whether the constraints are met, this will be checked before any inventory actions are performed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:75}
     */
    passesRequirements(action: InventoryAction): boolean;
    protected requirementChoices(): InventoryRequirements[];
}