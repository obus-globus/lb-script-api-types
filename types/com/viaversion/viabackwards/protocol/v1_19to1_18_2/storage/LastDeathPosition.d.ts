import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { GlobalBlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/GlobalBlockPosition.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LastDeathPosition extends Record implements StorableObject {
    constructor(position: GlobalBlockPosition)
    // private position: GlobalBlockPosition;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onRemove(): void;
    position(): GlobalBlockPosition;
    toString(): string;
}