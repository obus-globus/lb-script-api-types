import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$OffsetFields extends Enum<TimeZoneFormat$OffsetFields> {
    static H: TimeZoneFormat$OffsetFields;
    static HM: TimeZoneFormat$OffsetFields;
    static HMS: TimeZoneFormat$OffsetFields;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TimeZoneFormat$OffsetFields;
    static values(): TimeZoneFormat$OffsetFields[];
    private constructor()
    name(): "H" | "HM" | "HMS";
}