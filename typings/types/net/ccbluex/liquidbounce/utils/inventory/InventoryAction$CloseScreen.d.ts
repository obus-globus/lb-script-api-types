import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
export class InventoryAction$CloseScreen extends Record implements InventoryAction {
    constructor(screen: AbstractContainerScreen<any>)
    // private screen: AbstractContainerScreen<any>;
    /*not mapped: */ screen(): AbstractContainerScreen<any>;
    canPerformAction(inventoryConstraints: InventoryConstraints): boolean;
    component1(): AbstractContainerScreen<any>;
    copy(screen: AbstractContainerScreen<any>): InventoryAction$CloseScreen;
    equals(other: Object | null): boolean;
    hashCode(): number;
    performAction(): boolean;
    requiresPlayerInventoryOpen(): boolean;
    toString(): string;
}