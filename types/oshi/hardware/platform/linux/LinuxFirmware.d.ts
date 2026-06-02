import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractFirmware } from '../../../../oshi/hardware/common/AbstractFirmware.d.ts'
import type { LinuxFirmware$VcGenCmdStrings } from '../../../../oshi/hardware/platform/linux/LinuxFirmware$VcGenCmdStrings.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class LinuxFirmware extends AbstractFirmware {
    constructor()
    // private biosNameRev: () => Pair<string, string>;
    readonly description: () => string;
    readonly manufacturer: () => string;
    readonly name: () => string;
    readonly releaseDate: () => string;
    // private vcGenCmd: () => LinuxFirmware$VcGenCmdStrings;
    readonly version: () => string;
    getDescription(): string;
    getManufacturer(): string;
    getName(): string;
    getReleaseDate(): string;
    getVersion(): string;
    // private queryDescription(): string;
    // private queryManufacturer(): string;
    // private queryName(): string;
    // private queryReleaseDate(): string;
    // private queryVersion(): string;
}