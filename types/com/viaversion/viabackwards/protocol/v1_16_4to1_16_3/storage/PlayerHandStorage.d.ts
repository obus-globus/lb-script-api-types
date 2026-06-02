import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerHandStorage extends Object implements StorableObject {
    constructor()
    readonly currentHand: number;
    getCurrentHand(): number;
    onRemove(): void;
    setCurrentHand(arg0: number): void;
}