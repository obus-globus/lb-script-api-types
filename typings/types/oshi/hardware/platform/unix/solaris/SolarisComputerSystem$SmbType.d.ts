import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SolarisComputerSystem$SmbType extends Enum<SolarisComputerSystem$SmbType> {
    static SMB_TYPE_BASEBOARD: SolarisComputerSystem$SmbType;
    static SMB_TYPE_BIOS: SolarisComputerSystem$SmbType;
    static SMB_TYPE_SYSTEM: SolarisComputerSystem$SmbType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SolarisComputerSystem$SmbType;
    static values(): SolarisComputerSystem$SmbType[];
    private constructor()
    name(): "SMB_TYPE_BIOS" | "SMB_TYPE_SYSTEM" | "SMB_TYPE_BASEBOARD";
}