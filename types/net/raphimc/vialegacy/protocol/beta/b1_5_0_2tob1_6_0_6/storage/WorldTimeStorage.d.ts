import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WorldTimeStorage extends Object implements StorableObject {
    constructor()
    time: number;
    onRemove(): void;
}