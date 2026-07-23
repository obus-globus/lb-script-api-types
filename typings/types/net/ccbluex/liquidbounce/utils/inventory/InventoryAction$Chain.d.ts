import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
/**
 * A chained inventory action is a list of inventory actions that have to be executed in order
 * and CANNOT be stopped in between
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryAction.kt#L264 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryAction.kt:264}
 */
export class InventoryAction$Chain extends Record {
    constructor(inventoryConstraints: InventoryConstraints, actions: InventoryAction[], priority: Priority)
    // private actions: InventoryAction[];
    /*not mapped: */ actions(): InventoryAction[];
    // private inventoryConstraints: InventoryConstraints;
    /*not mapped: */ inventoryConstraints(): InventoryConstraints;
    // private priority: Priority;
    /*not mapped: */ priority(): Priority;
    canPerformAction(): boolean;
    component1(): InventoryConstraints;
    component2(): InventoryAction[];
    component3(): Priority;
    copy(inventoryConstraints: InventoryConstraints, actions: InventoryAction[], priority: Priority): InventoryAction$Chain;
    equals(other: Object | null): boolean;
    hashCode(): number;
    requiresInventoryOpen(): boolean;
    toString(): string;
}