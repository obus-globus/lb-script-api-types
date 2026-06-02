import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConfigManager$ModMetadata extends Record {
    constructor(modName: string, modVersion: string)
    // private modName: string;
    // private modVersion: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modName(): string;
    modVersion(): string;
    toString(): string;
}