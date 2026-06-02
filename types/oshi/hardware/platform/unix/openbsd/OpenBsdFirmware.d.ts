import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractFirmware } from '../../../../../oshi/hardware/common/AbstractFirmware.d.ts'
import type { Triplet } from '../../../../../oshi/util/tuples/Triplet.d.ts'
export class OpenBsdFirmware extends AbstractFirmware {
    constructor()
    // private manufVersRelease: () => Triplet<string, string, string>;
    getManufacturer(): string;
    getReleaseDate(): string;
    getVersion(): string;
}