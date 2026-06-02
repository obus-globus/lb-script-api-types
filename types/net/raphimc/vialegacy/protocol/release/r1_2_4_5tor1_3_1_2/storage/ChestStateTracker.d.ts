import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ChestStateTracker extends Object implements StorableObject {
    constructor()
    // private openChests: BlockPosition[];
    clear(): void;
    closeChest(arg0: BlockPosition): void;
    isChestOpen(arg0: BlockPosition): boolean;
    onRemove(): void;
    openChest(arg0: BlockPosition): void;
    unload(arg0: number, arg1: number): void;
}