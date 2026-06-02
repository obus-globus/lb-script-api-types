import type { Object } from '../../java/lang/Object.d.ts'
import type { Baseboard } from '../../oshi/hardware/Baseboard.d.ts'
import type { Firmware } from '../../oshi/hardware/Firmware.d.ts'
export interface ComputerSystem extends Object{
    getBaseboard(): Baseboard;
    getFirmware(): Firmware;
    getHardwareUUID(): string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
}