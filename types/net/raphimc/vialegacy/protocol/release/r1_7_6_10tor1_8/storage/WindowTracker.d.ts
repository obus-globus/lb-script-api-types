import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WindowTracker extends Object implements StorableObject {
    constructor()
    types: { [key: number]: number };
    get(arg0: number): number;
    onRemove(): void;
}