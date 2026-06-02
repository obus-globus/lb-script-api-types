import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Baseboard } from '../../../../../oshi/hardware/Baseboard.d.ts'
import type { Firmware } from '../../../../../oshi/hardware/Firmware.d.ts'
import type { AbstractComputerSystem } from '../../../../../oshi/hardware/common/AbstractComputerSystem.d.ts'
import type { AixComputerSystem$LsattrStrings } from '../../../../../oshi/hardware/platform/unix/aix/AixComputerSystem$LsattrStrings.d.ts'
export class AixComputerSystem extends AbstractComputerSystem {
    constructor(arg0: () => string[])
    // private lsattrStrings: () => AixComputerSystem$LsattrStrings;
    // private lscfg: () => string[];
    createBaseboard(): Baseboard;
    createFirmware(): Firmware;
    getHardwareUUID(): string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
}