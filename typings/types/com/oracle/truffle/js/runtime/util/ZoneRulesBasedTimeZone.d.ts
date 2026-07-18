import type { ZoneRules } from '../../../../../../java/time/zone/ZoneRules.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { ULocale } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ZoneRulesBasedTimeZone extends TimeZone {
    static GENERIC_LOCATION: number;
    static GMT_ZONE: TimeZone;
    static LONG: number;
    static LONG_GENERIC: number;
    static LONG_GMT: number;
    static SHORT: number;
    static SHORT_COMMONLY_USED: number;
    static SHORT_GENERIC: number;
    static SHORT_GMT: number;
    static TIMEZONE_ICU: number;
    static TIMEZONE_JDK: number;
    static UNKNOWN_ZONE: TimeZone;
    static UNKNOWN_ZONE_ID: string;
    static countEquivalentIDs(paramid: string): number;
    static forLocaleOrDefault(paramlocale: Locale): TimeZone;
    static forULocaleOrDefault(paramlocale: ULocale): TimeZone;
    static getAvailableIDs(): string[];
    static getAvailableIDs(paramrawOffset: number): string[];
    static getAvailableIDs(paramcountry: string): string[];
    static getAvailableIDs(paramzoneType: TimeZone$SystemTimeZoneType, paramregion: string, paramrawOffset: number): string[];
    static getCanonicalID(paramid: string): string;
    static getCanonicalID(paramid: string, paramisSystemID: boolean[]): string;
    static getDefault(): TimeZone;
    static getDefaultTimeZoneType(): number;
    static getEquivalentID(paramid: string, paramindex: number): string;
    static getFrozenTimeZone(paramID: string): TimeZone;
    static getIDForWindowsID(paramwinid: string, paramregion: string): string;
    static getIanaID(paramid: string): string;
    static getRegion(paramid: string): string;
    static getTZDataVersion(): string;
    static getTimeZone(paramID: string): TimeZone;
    static getTimeZone(paramID: string, paramtype: number): TimeZone;
    static getWindowsID(paramid: string): string;
    static setDefault(paramtz: TimeZone): void;
    static setDefaultTimeZoneType(paramtype: number): void;
    static setICUDefault(paramtz: TimeZone): void;
    constructor(id: string, rules: ZoneRules)
    // private rules: ZoneRules;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, milliseconds: number): number;
    getOffset(date: number): number;
    getOffset(date: number, local: boolean, offsets: number[]): void;
    getRawOffset(): number;
    inDaylightTime(date: Date): boolean;
    setRawOffset(offsetMillis: number): void;
    useDaylightTime(): boolean;
}