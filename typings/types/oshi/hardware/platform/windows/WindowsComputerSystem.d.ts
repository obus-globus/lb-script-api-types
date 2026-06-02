import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Baseboard } from '../../../../oshi/hardware/Baseboard.d.ts'
import type { Firmware } from '../../../../oshi/hardware/Firmware.d.ts'
import type { AbstractComputerSystem } from '../../../../oshi/hardware/common/AbstractComputerSystem.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class WindowsComputerSystem extends AbstractComputerSystem {
    constructor()
    // private manufacturerModel: () => Pair<string, string>;
    // private serialNumberUUID: () => Pair<string, string>;
    createBaseboard(): Baseboard;
    createFirmware(): Firmware;
    getHardwareUUID(): string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
}