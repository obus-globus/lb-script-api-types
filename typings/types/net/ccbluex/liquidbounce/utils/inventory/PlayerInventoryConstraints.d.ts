import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { InventoryRequirements } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryRequirements.d.ts'
/**
 * Additional constraints for the player inventory. This should be used when interacting with the player inventory
 * instead of a generic container.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:87}
 */
export class PlayerInventoryConstraints extends InventoryConstraints {
    constructor()
    readonly requiresOpenInventory: boolean;
    protected requirementChoices(): InventoryRequirements[];
}