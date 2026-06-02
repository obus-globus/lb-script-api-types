import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export interface UsbDevice extends Object, Comparable<UsbDevice>{
    getConnectedDevices(): UsbDevice[];
    getName(): string;
    getProductId(): string;
    getSerialNumber(): string;
    getUniqueDeviceId(): string;
    getVendor(): string;
    getVendorId(): string;
}