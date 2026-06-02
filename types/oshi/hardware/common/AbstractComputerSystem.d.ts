import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Baseboard } from '../../../oshi/hardware/Baseboard.d.ts'
import type { ComputerSystem } from '../../../oshi/hardware/ComputerSystem.d.ts'
import type { Firmware } from '../../../oshi/hardware/Firmware.d.ts'
export abstract class AbstractComputerSystem extends Object implements ComputerSystem {
    constructor()
    readonly baseboard: () => Baseboard;
    readonly firmware: () => Firmware;
    createBaseboard(): Baseboard;
    createFirmware(): Firmware;
    getBaseboard(): Baseboard;
    getFirmware(): Firmware;
    toString(): string;
}