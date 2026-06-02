import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
export interface InventoryAction extends Object{
    canPerformAction(inventoryConstraints: InventoryConstraints): boolean;
    performAction(): boolean;
    requiresPlayerInventoryOpen(): boolean;
}