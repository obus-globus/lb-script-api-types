import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BackSignEditStorage extends Record implements StorableObject {
    constructor(position: BlockPosition)
    // private position: BlockPosition;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onRemove(): void;
    position(): BlockPosition;
    toString(): string;
}