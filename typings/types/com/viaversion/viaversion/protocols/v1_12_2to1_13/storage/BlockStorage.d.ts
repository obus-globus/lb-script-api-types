import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { BlockStorage$ReplacementData } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/storage/BlockStorage$ReplacementData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockStorage extends Object implements StorableObject {
    constructor()
    // private blocks: { [key: string]: any };
    clear(): void;
    contains(arg0: BlockPosition): boolean;
    get(arg0: BlockPosition): BlockStorage$ReplacementData;
    isWelcome(arg0: number): boolean;
    onRemove(): void;
    remove(arg0: BlockPosition): BlockStorage$ReplacementData;
    removeChunk(arg0: number, arg1: number): void;
    store(arg0: BlockPosition, arg1: number): void;
    store(arg0: BlockPosition, arg1: number, arg2: number): void;
}