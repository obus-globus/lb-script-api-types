import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Locale$FilteringMode extends Enum<Locale$FilteringMode> {
    static AUTOSELECT_FILTERING: Locale$FilteringMode;
    static EXTENDED_FILTERING: Locale$FilteringMode;
    static IGNORE_EXTENDED_RANGES: Locale$FilteringMode;
    static MAP_EXTENDED_RANGES: Locale$FilteringMode;
    static REJECT_EXTENDED_RANGES: Locale$FilteringMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Locale$FilteringMode;
    static values(): Locale$FilteringMode[];
    private constructor()
    name(): "AUTOSELECT_FILTERING" | "EXTENDED_FILTERING" | "IGNORE_EXTENDED_RANGES" | "MAP_EXTENDED_RANGES" | "REJECT_EXTENDED_RANGES";
}