import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InventoryTracker extends Object implements StorableObject {
    constructor()
    // private dragging: boolean;
    readonly inventory: string;
    // private itemIdInCursor: number;
    // private windowItemCache: JavaMap<any, any>;
    getInventory(): string;
    getItemId(arg0: number, arg1: number): number;
    handleWindowClick(arg0: UserConnection, arg1: number, arg2: number, arg3: number, arg4: number): void;
    onRemove(): void;
    resetInventory(arg0: number): void;
    setInventory(arg0: string): void;
    setItemId(arg0: number, arg1: number, arg2: number): void;
}