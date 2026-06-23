import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InventoryStateIds extends Object implements StorableObject {
    constructor()
    // private ids: { [key: string]: any };
    onRemove(): void;
    removeStateId(arg0: number): number;
    setStateId(arg0: number, arg1: number): void;
}