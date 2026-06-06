import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GroundFlagTracker extends Object implements StorableObject {
    constructor()
    // private onGround: boolean;
    horizontalCollision(): boolean;
    onGround(): boolean;
    onRemove(): void;
    setHorizontalCollision(arg0: boolean): void;
    setOnGround(arg0: boolean): boolean;
}