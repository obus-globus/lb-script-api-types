import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$TimeType extends Enum<TimeZoneFormat$TimeType> {
    static DAYLIGHT: TimeZoneFormat$TimeType;
    static STANDARD: TimeZoneFormat$TimeType;
    static UNKNOWN: TimeZoneFormat$TimeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TimeZoneFormat$TimeType;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNKNOWN" | "STANDARD" | "DAYLIGHT";
}