import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerSneaking extends Object implements StorableObject {
    constructor()
    onRemove(): void;
    setSneaking(arg0: boolean): void;
    sneaking(): boolean;
}