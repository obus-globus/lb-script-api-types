import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimeZoneNames$NameType extends Enum<TimeZoneNames$NameType> {
    static EXEMPLAR_LOCATION: TimeZoneNames$NameType;
    static LONG_DAYLIGHT: TimeZoneNames$NameType;
    static LONG_GENERIC: TimeZoneNames$NameType;
    static LONG_STANDARD: TimeZoneNames$NameType;
    static SHORT_DAYLIGHT: TimeZoneNames$NameType;
    static SHORT_GENERIC: TimeZoneNames$NameType;
    static SHORT_STANDARD: TimeZoneNames$NameType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TimeZoneNames$NameType;
    static values(): TimeZoneNames$NameType[];
    private constructor()
    name(): "LONG_GENERIC" | "LONG_STANDARD" | "LONG_DAYLIGHT" | "SHORT_GENERIC" | "SHORT_STANDARD" | "SHORT_DAYLIGHT" | "EXEMPLAR_LOCATION";
}