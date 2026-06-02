import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlayerHealthTracker extends Object implements StorableObject {
    constructor()
    readonly health: number;
    getHealth(): number;
    onRemove(): void;
    setHealth(arg0: number): void;
}