import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Baseboard } from '../../../../oshi/hardware/Baseboard.d.ts'
import type { Firmware } from '../../../../oshi/hardware/Firmware.d.ts'
import type { AbstractComputerSystem } from '../../../../oshi/hardware/common/AbstractComputerSystem.d.ts'
import type { Quartet } from '../../../../oshi/util/tuples/Quartet.d.ts'
export class MacComputerSystem extends AbstractComputerSystem {
    constructor()
    // private manufacturerModelSerialUUID: () => Quartet<string, string, string, string>;
    createBaseboard(): Baseboard;
    createFirmware(): Firmware;
    getHardwareUUID(): string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
}