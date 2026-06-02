import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Baseboard } from '../../../../../oshi/hardware/Baseboard.d.ts'
import type { Firmware } from '../../../../../oshi/hardware/Firmware.d.ts'
import type { AbstractComputerSystem } from '../../../../../oshi/hardware/common/AbstractComputerSystem.d.ts'
import type { SolarisComputerSystem$SmbiosStrings } from '../../../../../oshi/hardware/platform/unix/solaris/SolarisComputerSystem$SmbiosStrings.d.ts'
export class SolarisComputerSystem extends AbstractComputerSystem {
    constructor()
    // private smbiosStrings: () => SolarisComputerSystem$SmbiosStrings;
    createBaseboard(): Baseboard;
    createFirmware(): Firmware;
    getHardwareUUID(): string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
}