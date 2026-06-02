import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractBaseboard } from '../../../../oshi/hardware/common/AbstractBaseboard.d.ts'
import type { Quartet } from '../../../../oshi/util/tuples/Quartet.d.ts'
export class MacBaseboard extends AbstractBaseboard {
    constructor()
    // private manufModelVersSerial: () => Quartet<string, string, string, string>;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
    getVersion(): string;
}