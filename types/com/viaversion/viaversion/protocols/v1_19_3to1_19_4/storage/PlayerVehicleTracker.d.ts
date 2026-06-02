import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerVehicleTracker extends Object implements StorableObject {
    constructor()
    readonly vehicleId: number;
    getVehicleId(): number;
    onRemove(): void;
    setVehicleId(arg0: number): void;
}