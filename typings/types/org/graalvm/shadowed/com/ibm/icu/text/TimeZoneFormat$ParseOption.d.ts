import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$ParseOption extends Enum<TimeZoneFormat$ParseOption> {
    static ALL_STYLES: TimeZoneFormat$ParseOption;
    static TZ_DATABASE_ABBREVIATIONS: TimeZoneFormat$ParseOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TimeZoneFormat$ParseOption;
    static values(): TimeZoneFormat$ParseOption[];
    private constructor()
    name(): "ALL_STYLES" | "TZ_DATABASE_ABBREVIATIONS";
}