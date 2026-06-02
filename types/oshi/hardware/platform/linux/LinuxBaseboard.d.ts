import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractBaseboard } from '../../../../oshi/hardware/common/AbstractBaseboard.d.ts'
import type { Quartet } from '../../../../oshi/util/tuples/Quartet.d.ts'
export class LinuxBaseboard extends AbstractBaseboard {
    constructor()
    readonly manufacturer: () => string;
    // private manufacturerModelVersionSerial: () => Quartet<string, string, string, string>;
    readonly model: () => string;
    readonly serialNumber: () => string;
    readonly version: () => string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
    getVersion(): string;
    // private queryManufacturer(): string;
    // private queryModel(): string;
    // private querySerialNumber(): string;
    // private queryVersion(): string;
}