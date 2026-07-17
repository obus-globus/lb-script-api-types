import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlayerNameTracker extends Object implements StorableObject {
    constructor()
    names: JavaMap<any, any>;
    onRemove(): void;
}