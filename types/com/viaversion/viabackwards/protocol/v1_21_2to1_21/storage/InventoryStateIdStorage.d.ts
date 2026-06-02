import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InventoryStateIdStorage extends Object implements StorableObject {
    constructor()
    readonly smithingTableOpen: boolean;
    readonly stateId: number;
    onRemove(): void;
    setSmithingTableOpen(arg0: boolean): void;
    setStateId(arg0: number): void;
    smithingTableOpen(): boolean;
    stateId(): number;
}