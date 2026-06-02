import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$ParseOption extends Enum<TimeZoneFormat$ParseOption> {
    static ALL_STYLES: TimeZoneFormat$ParseOption;
    static TZ_DATABASE_ABBREVIATIONS: TimeZoneFormat$ParseOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TimeZoneFormat$ParseOption;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALL_STYLES" | "TZ_DATABASE_ABBREVIATIONS";
}