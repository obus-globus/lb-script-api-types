import type { AbstractFirmware } from '../../../../../oshi/hardware/common/AbstractFirmware.d.ts'
export class SolarisFirmware extends AbstractFirmware {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly manufacturer: string;
    readonly releaseDate: string;
    readonly version: string;
    getManufacturer(): string;
    getReleaseDate(): string;
    getVersion(): string;
}