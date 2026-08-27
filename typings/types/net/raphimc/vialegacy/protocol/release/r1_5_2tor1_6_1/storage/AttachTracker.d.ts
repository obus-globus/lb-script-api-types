import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttachTracker extends Object implements StorableObject {
    constructor()
    readonly lastSneakState: boolean;
    readonly vehicleEntityId: number;
    getVehicleEntityId(): number;
    isLastSneakState(): boolean;
    onRemove(): void;
    setLastSneakState(arg0: boolean): void;
    setVehicleEntityId(arg0: number): void;
}