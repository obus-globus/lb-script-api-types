import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SneakStorage extends Object implements StorableObject {
    constructor()
    // private sneaking: boolean;
    onRemove(): void;
    setSneaking(arg0: boolean): boolean;
    sneaking(): boolean;
}