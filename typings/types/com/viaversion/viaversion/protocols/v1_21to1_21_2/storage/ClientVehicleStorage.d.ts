import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClientVehicleStorage extends Object implements StorableObject {
    constructor(arg0: number)
    // private flags: number;
    // private forwardMovement: number;
    // private sidewaysMovement: number;
    // private vehicleId: number;
    flags(): number;
    forwardMovement(): number;
    onRemove(): void;
    sidewaysMovement(): number;
    storeMovement(arg0: number, arg1: number, arg2: number): void;
    vehicleId(): number;
}