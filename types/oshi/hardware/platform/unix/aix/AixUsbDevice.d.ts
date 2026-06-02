import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { UsbDevice } from '../../../../../oshi/hardware/UsbDevice.d.ts'
import type { AbstractUsbDevice } from '../../../../../oshi/hardware/common/AbstractUsbDevice.d.ts'
export class AixUsbDevice extends AbstractUsbDevice {
    static getUsbDevices(paramarg0: boolean, paramarg1: () => Object | null): UsbDevice[];
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: UsbDevice[])
}