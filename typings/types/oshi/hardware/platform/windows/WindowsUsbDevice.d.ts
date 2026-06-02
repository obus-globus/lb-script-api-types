import type { UsbDevice } from '../../../../oshi/hardware/UsbDevice.d.ts'
import type { AbstractUsbDevice } from '../../../../oshi/hardware/common/AbstractUsbDevice.d.ts'
export class WindowsUsbDevice extends AbstractUsbDevice {
    static getUsbDevices(paramarg0: boolean): UsbDevice[];
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: UsbDevice[])
}