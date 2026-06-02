import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SignStorage extends Object implements StorableObject {
    constructor()
    // private signs: BlockPosition[];
    addSign(arg0: BlockPosition): void;
    isSign(arg0: BlockPosition): boolean;
    onRemove(): void;
    removeSign(arg0: BlockPosition): void;
    removeSigns(arg0: number, arg1: number): void;
}