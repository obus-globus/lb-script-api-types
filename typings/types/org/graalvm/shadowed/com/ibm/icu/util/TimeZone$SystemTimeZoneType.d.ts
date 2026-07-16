import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TimeZone$SystemTimeZoneType extends Enum<TimeZone$SystemTimeZoneType> {
    static ANY: TimeZone$SystemTimeZoneType;
    static CANONICAL: TimeZone$SystemTimeZoneType;
    static CANONICAL_LOCATION: TimeZone$SystemTimeZoneType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TimeZone$SystemTimeZoneType;
    static values(): TimeZone$SystemTimeZoneType[];
    private constructor()
    name(): "ANY" | "CANONICAL" | "CANONICAL_LOCATION";
}