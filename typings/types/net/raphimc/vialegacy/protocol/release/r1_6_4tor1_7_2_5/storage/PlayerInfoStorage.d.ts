import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlayerInfoStorage extends Object implements StorableObject {
    constructor()
    entityId: number;
    onGround: boolean;
    pitch: number;
    posX: number;
    posY: number;
    posZ: number;
    yaw: number;
    onRemove(): void;
}