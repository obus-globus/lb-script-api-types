import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttachTracker extends Object implements StorableObject {
    constructor()
    lastSneakState: boolean;
    vehicleEntityId: number;
    onRemove(): void;
}