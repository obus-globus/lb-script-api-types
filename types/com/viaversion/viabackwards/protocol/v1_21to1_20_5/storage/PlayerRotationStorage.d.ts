import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerRotationStorage extends Object implements StorableObject {
    constructor()
    // private pitch: number;
    // private yaw: number;
    onRemove(): void;
    pitch(): number;
    setRotation(arg0: number, arg1: number): void;
    yaw(): number;
}