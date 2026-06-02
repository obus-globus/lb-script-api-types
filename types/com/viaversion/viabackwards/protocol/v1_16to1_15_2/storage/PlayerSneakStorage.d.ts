import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerSneakStorage extends Object implements StorableObject {
    constructor()
    readonly sneaking: boolean;
    isSneaking(): boolean;
    onRemove(): void;
    setSneaking(arg0: boolean): void;
}