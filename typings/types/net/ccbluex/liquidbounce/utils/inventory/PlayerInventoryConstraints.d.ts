import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { InventoryRequirements } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryRequirements.d.ts'
/**
 * Additional constraints for the player inventory. This should be used when interacting with the player inventory
 * instead of a generic container.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:83}
 */
export class PlayerInventoryConstraints extends InventoryConstraints {
    constructor()
    readonly requiresOpenInventory: boolean;
    protected requirementChoices(): InventoryRequirements[];
}