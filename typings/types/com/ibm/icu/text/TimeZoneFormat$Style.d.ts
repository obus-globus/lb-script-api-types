import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$Style extends Enum<TimeZoneFormat$Style> {
    static EXEMPLAR_LOCATION: TimeZoneFormat$Style;
    static GENERIC_LOCATION: TimeZoneFormat$Style;
    static GENERIC_LONG: TimeZoneFormat$Style;
    static GENERIC_SHORT: TimeZoneFormat$Style;
    static ISO_BASIC_FIXED: TimeZoneFormat$Style;
    static ISO_BASIC_FULL: TimeZoneFormat$Style;
    static ISO_BASIC_LOCAL_FIXED: TimeZoneFormat$Style;
    static ISO_BASIC_LOCAL_FULL: TimeZoneFormat$Style;
    static ISO_BASIC_LOCAL_SHORT: TimeZoneFormat$Style;
    static ISO_BASIC_SHORT: TimeZoneFormat$Style;
    static ISO_EXTENDED_FIXED: TimeZoneFormat$Style;
    static ISO_EXTENDED_FULL: TimeZoneFormat$Style;
    static ISO_EXTENDED_LOCAL_FIXED: TimeZoneFormat$Style;
    static ISO_EXTENDED_LOCAL_FULL: TimeZoneFormat$Style;
    static LOCALIZED_GMT: TimeZoneFormat$Style;
    static LOCALIZED_GMT_SHORT: TimeZoneFormat$Style;
    static SPECIFIC_LONG: TimeZoneFormat$Style;
    static SPECIFIC_SHORT: TimeZoneFormat$Style;
    static ZONE_ID: TimeZoneFormat$Style;
    static ZONE_ID_SHORT: TimeZoneFormat$Style;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TimeZoneFormat$Style;
    static values(): TimeZoneFormat$Style[];
    private constructor(arg2: number)
    // private flag: number;
    name(): "GENERIC_LOCATION" | "GENERIC_LONG" | "GENERIC_SHORT" | "SPECIFIC_LONG" | "SPECIFIC_SHORT" | "LOCALIZED_GMT" | "LOCALIZED_GMT_SHORT" | "ISO_BASIC_SHORT" | "ISO_BASIC_LOCAL_SHORT" | "ISO_BASIC_FIXED" | "ISO_BASIC_LOCAL_FIXED" | "ISO_BASIC_FULL" | "ISO_BASIC_LOCAL_FULL" | "ISO_EXTENDED_FIXED" | "ISO_EXTENDED_LOCAL_FIXED" | "ISO_EXTENDED_FULL" | "ISO_EXTENDED_LOCAL_FULL" | "ZONE_ID" | "ZONE_ID_SHORT" | "EXEMPLAR_LOCATION";
}