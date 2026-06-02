import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlayerAirTimeStorage extends Object implements StorableObject {
    constructor()
    MAX_AIR: number;
    air: number;
    sentPacket: boolean;
    onRemove(): void;
}