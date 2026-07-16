import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$TimeType extends Enum<TimeZoneFormat$TimeType> {
    static DAYLIGHT: TimeZoneFormat$TimeType;
    static STANDARD: TimeZoneFormat$TimeType;
    static UNKNOWN: TimeZoneFormat$TimeType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TimeZoneFormat$TimeType;
    static values(): TimeZoneFormat$TimeType[];
    private constructor()
    name(): "UNKNOWN" | "STANDARD" | "DAYLIGHT";
}