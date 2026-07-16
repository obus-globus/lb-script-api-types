import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class PackOutput$Target extends Enum<PackOutput$Target> {
    static DATA_PACK: PackOutput$Target;
    static REPORTS: PackOutput$Target;
    static RESOURCE_PACK: PackOutput$Target;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PackOutput$Target;
    static values(): PackOutput$Target[];
    private constructor(directory: string)
    // private directory: string;
    name(): "DATA_PACK" | "RESOURCE_PACK" | "REPORTS";
}