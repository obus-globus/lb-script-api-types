import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BackwardsBlockStorage extends Object implements StorableObject {
    constructor()
    readonly blocks: Map<BlockPosition, number>;
    checkAndStore(arg0: BlockPosition, arg1: number): void;
    clear(): void;
    get(arg0: BlockPosition): number;
    getBlocks(): Map<BlockPosition, number>;
    onRemove(): void;
    remove(arg0: BlockPosition): number;
}