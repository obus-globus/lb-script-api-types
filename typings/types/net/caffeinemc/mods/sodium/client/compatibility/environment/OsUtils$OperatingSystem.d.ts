import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class OsUtils$OperatingSystem extends Enum<OsUtils$OperatingSystem> {
    static LINUX: OsUtils$OperatingSystem;
    static MAC: OsUtils$OperatingSystem;
    static UNKNOWN: OsUtils$OperatingSystem;
    static WIN: OsUtils$OperatingSystem;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OsUtils$OperatingSystem;
    static values(): OsUtils$OperatingSystem[];
    private constructor()
    name(): "WIN" | "MAC" | "LINUX" | "UNKNOWN";
}