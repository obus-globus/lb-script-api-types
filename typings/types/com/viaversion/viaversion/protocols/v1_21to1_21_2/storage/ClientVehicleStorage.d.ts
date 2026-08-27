import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClientVehicleStorage extends Object {
    constructor(arg0: number)
    // private flags: number;
    // private forwardMovement: number;
    // private sidewaysMovement: number;
    // private vehicleId: number;
    flags(): number;
    forwardMovement(): number;
    sidewaysMovement(): number;
    storeMovement(arg0: number, arg1: number, arg2: number): void;
    vehicleId(): number;
}