import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PlayerAirTimeStorage extends Object implements StorableObject {
    constructor()
    readonly air: number;
    readonly maxAir: number;
    readonly sentPacket: boolean;
    getAir(): number;
    getMaxAir(): number;
    isSentPacket(): boolean;
    onRemove(): void;
    setAir(arg0: number): void;
    setSentPacket(arg0: boolean): void;
}