import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Baseboard } from '../../../../oshi/hardware/Baseboard.d.ts'
import type { Firmware } from '../../../../oshi/hardware/Firmware.d.ts'
import type { AbstractComputerSystem } from '../../../../oshi/hardware/common/AbstractComputerSystem.d.ts'
export class LinuxComputerSystem extends AbstractComputerSystem {
    constructor()
    readonly manufacturer: () => string;
    readonly model: () => string;
    readonly serialNumber: () => string;
    // private uuid: () => string;
    createBaseboard(): Baseboard;
    createFirmware(): Firmware;
    getHardwareUUID(): string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
}