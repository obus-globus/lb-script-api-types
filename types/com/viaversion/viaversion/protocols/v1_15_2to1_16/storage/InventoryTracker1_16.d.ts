import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InventoryTracker1_16 extends Object implements StorableObject {
    constructor()
    readonly inventoryOpen: boolean;
    isInventoryOpen(): boolean;
    onRemove(): void;
    setInventoryOpen(arg0: boolean): void;
}