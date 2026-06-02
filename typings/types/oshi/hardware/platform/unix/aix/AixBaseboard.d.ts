import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractBaseboard } from '../../../../../oshi/hardware/common/AbstractBaseboard.d.ts'
export class AixBaseboard extends AbstractBaseboard {
    constructor(arg0: () => string[])
    readonly model: string;
    readonly serialNumber: string;
    readonly version: string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
    getVersion(): string;
}