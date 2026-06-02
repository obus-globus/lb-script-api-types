import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlayerNameTracker extends Object implements StorableObject {
    constructor()
    names: Int2ObjectMap<string>;
    onRemove(): void;
}