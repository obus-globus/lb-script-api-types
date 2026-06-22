import type { Object } from '../../../java/lang/Object.d.ts'
import type { Baseboard } from '../../../oshi/hardware/Baseboard.d.ts'
export abstract class AbstractBaseboard extends Object implements Baseboard {
    constructor()
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
    getVersion(): string;
    toString(): string;
}