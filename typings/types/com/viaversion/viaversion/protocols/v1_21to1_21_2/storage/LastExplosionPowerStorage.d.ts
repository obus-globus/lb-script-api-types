import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LastExplosionPowerStorage extends Object implements StorableObject {
    constructor()
    affectedBlocks(): number;
    onRemove(): void;
    power(): number;
    setAffectedBlocks(arg0: number): void;
    setPower(arg0: number): void;
}