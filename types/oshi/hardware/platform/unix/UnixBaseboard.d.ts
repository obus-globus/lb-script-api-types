import type { AbstractBaseboard } from '../../../../oshi/hardware/common/AbstractBaseboard.d.ts'
export class UnixBaseboard extends AbstractBaseboard {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    readonly manufacturer: string;
    readonly model: string;
    readonly serialNumber: string;
    readonly version: string;
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
    getVersion(): string;
}