import type { Object } from '../../../java/lang/Object.d.ts'
import type { UsbDevice } from '../../../oshi/hardware/UsbDevice.d.ts'
export abstract class AbstractUsbDevice extends Object implements UsbDevice {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: UsbDevice[])
    readonly connectedDevices: UsbDevice[];
    readonly name: string;
    readonly productId: string;
    readonly serialNumber: string;
    readonly uniqueDeviceId: string;
    readonly vendor: string;
    readonly vendorId: string;
    compareTo(arg0: UsbDevice): number;
    getConnectedDevices(): UsbDevice[];
    getName(): string;
    getProductId(): string;
    getSerialNumber(): string;
    getUniqueDeviceId(): string;
    getVendor(): string;
    getVendorId(): string;
    toString(): string;
}