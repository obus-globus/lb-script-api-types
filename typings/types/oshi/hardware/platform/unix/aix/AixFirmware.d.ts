import type { AbstractFirmware } from '../../../../../oshi/hardware/common/AbstractFirmware.d.ts'
export class AixFirmware extends AbstractFirmware {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly manufacturer: string;
    readonly name: string;
    readonly version: string;
    getManufacturer(): string;
    getName(): string;
    getVersion(): string;
}