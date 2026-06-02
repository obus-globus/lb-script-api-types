import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class OsUtils$OperatingSystem extends Enum<OsUtils$OperatingSystem> {
    static LINUX: OsUtils$OperatingSystem;
    static MAC: OsUtils$OperatingSystem;
    static UNKNOWN: OsUtils$OperatingSystem;
    static WIN: OsUtils$OperatingSystem;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OsUtils$OperatingSystem;
    static values(): (Object | null)[];
    private constructor()
    name(): "WIN" | "MAC" | "LINUX" | "UNKNOWN";
}