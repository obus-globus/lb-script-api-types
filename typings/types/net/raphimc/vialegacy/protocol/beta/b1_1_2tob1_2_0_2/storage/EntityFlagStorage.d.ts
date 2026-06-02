import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class EntityFlagStorage extends Object implements StorableObject {
    constructor()
    // private animationFlags: Int2IntMap;
    getFlag(arg0: number, arg1: number): boolean;
    getFlagMask(arg0: number): number;
    onRemove(): void;
    setFlag(arg0: number, arg1: number, arg2: boolean): void;
}