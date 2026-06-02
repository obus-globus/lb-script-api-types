import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class TimeZone extends Object implements Serializable, Cloneable, Freezable<TimeZone> {
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
    static getAvailableIDs(): (Object | null)[];
    static getAvailableIDs(paramrawOffset: number): (Object | null)[];
    static getAvailableIDs(paramcountry: string): (Object | null)[];
    static getAvailableIDs(paramzoneType: TimeZone$SystemTimeZoneType, paramregion: string, paramrawOffset: number): string[];
    static getCanonicalID(paramid: string): string;
    static getCanonicalID(paramid: string, paramisSystemID: (Object | null)[]): string;
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
    constructor()
    constructor(ID: string)
    readonly ID: string;
    // private _getDisplayName(style: number, daylight: boolean, locale: ULocale): string;
    protected clone(): Object;
    clone(): Object;
    cloneAsThawed(): TimeZone;
    equals(obj: Object | null): boolean;
    freeze(): TimeZone;
    getDSTSavings(): number;
    getDisplayName(): string;
    getDisplayName(locale: Locale): string;
    getDisplayName(daylight: boolean, style: number): string;
    getDisplayName(daylight: boolean, style: number, locale: Locale): string;
    getDisplayName(daylight: boolean, style: number, locale: ULocale): string;
    getDisplayName(locale: ULocale): string;
    getID(): string;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, milliseconds: number): number;
    getOffset(date: number): number;
    getOffset(date: number, local: boolean, offsets: number[]): void;
    getRawOffset(): number;
    hasSameRules(other: TimeZone): boolean;
    hashCode(): number;
    inDaylightTime(date: Date): boolean;
    isFrozen(): boolean;
    observesDaylightTime(): boolean;
    setID(ID: string): void;
    setRawOffset(offsetMillis: number): void;
    useDaylightTime(): boolean;
}