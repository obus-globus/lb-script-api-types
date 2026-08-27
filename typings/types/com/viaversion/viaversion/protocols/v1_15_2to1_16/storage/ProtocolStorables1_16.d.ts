import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { InventoryTracker1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/storage/InventoryTracker1_16.d.ts'
export class ProtocolStorables1_16 extends ProtocolStorablesBase {
    constructor()
    // private inventoryTracker: InventoryTracker1_16;
    inventoryTracker(): InventoryTracker1_16;
}