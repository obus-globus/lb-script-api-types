import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractFirmware } from '../../../../oshi/hardware/common/AbstractFirmware.d.ts'
import type { Quintet } from '../../../../oshi/util/tuples/Quintet.d.ts'
export class WindowsFirmware extends AbstractFirmware {
    constructor()
    // private manufNameDescVersRelease: () => Quintet<string, string, string, string, string>;
    getDescription(): string;
    getManufacturer(): string;
    getName(): string;
    getReleaseDate(): string;
    getVersion(): string;
}