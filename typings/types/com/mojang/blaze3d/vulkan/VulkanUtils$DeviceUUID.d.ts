import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanUtils$DeviceUUID extends Record {
    constructor(driverID: number, vendorID: number, deviceID: number)
    // private deviceID: number;
    // private driverID: number;
    // private vendorID: number;
    deviceID(): number;
    driverID(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    vendorID(): number;
}