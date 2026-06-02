import type { Object } from '../../../java/lang/Object.d.ts'
import type { Firmware } from '../../../oshi/hardware/Firmware.d.ts'
export abstract class AbstractFirmware extends Object implements Firmware {
    constructor()
    getDescription(): string;
    getName(): string;
    getReleaseDate(): string;
    toString(): string;
}