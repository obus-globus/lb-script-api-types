import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { TimeZone as TimeZone_2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class JavaTimeZone extends TimeZone_2 implements Cloneable {
    static GENERIC_LOCATION: number;
    static GMT_ZONE: TimeZone_2;
    static LONG: number;
    static LONG_GENERIC: number;
    static LONG_GMT: number;
    static SHORT: number;
    static SHORT_COMMONLY_USED: number;
    static SHORT_GENERIC: number;
    static SHORT_GMT: number;
    static TIMEZONE_ICU: number;
    static TIMEZONE_JDK: number;
    static UNKNOWN_ZONE: TimeZone_2;
    static UNKNOWN_ZONE_ID: string;
    static countEquivalentIDs(paramid: string): number;
    static createTimeZone(paramid: string): JavaTimeZone;
    static forLocaleOrDefault(paramlocale: Locale): TimeZone_2;
    static forULocaleOrDefault(paramlocale: ULocale): TimeZone_2;
    static getAvailableIDs(): string[];
    static getAvailableIDs(paramrawOffset: number): string[];
    static getAvailableIDs(paramcountry: string): string[];
    static getAvailableIDs(paramzoneType: TimeZone$SystemTimeZoneType, paramregion: string, paramrawOffset: number): string[];
    static getCanonicalID(paramid: string): string;
    static getCanonicalID(paramid: string, paramisSystemID: boolean[]): string;
    static getDefault(): TimeZone_2;
    static getDefaultTimeZoneType(): number;
    static getEquivalentID(paramid: string, paramindex: number): string;
    static getFrozenTimeZone(paramID: string): TimeZone_2;
    static getIDForWindowsID(paramwinid: string, paramregion: string): string;
    static getIanaID(paramid: string): string;
    static getRegion(paramid: string): string;
    static getTZDataVersion(): string;
    static getTimeZone(paramID: string): TimeZone_2;
    static getTimeZone(paramID: string, paramtype: number): TimeZone_2;
    static getWindowsID(paramid: string): string;
    static setDefault(paramtz: TimeZone_2): void;
    static setDefaultTimeZoneType(paramtype: number): void;
    static setICUDefault(paramtz: TimeZone_2): void;
    constructor()
    constructor(jtz: TimeZone, id: string)
    // private isFrozen: boolean;
    // private javacal: Calendar;
    // private javatz: TimeZone;
    clone(): JavaTimeZone;
    cloneAsThawed(): JavaTimeZone;
    freeze(): TimeZone_2;
    getDSTSavings(): number;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, milliseconds: number): number;
    getOffset(date: number): number;
    getOffset(date: number, local: boolean, offsets: number[]): void;
    getRawOffset(): number;
    hashCode(): number;
    inDaylightTime(date: Date): boolean;
    isFrozen(): boolean;
    observesDaylightTime(): boolean;
    // private readObject(s: ObjectInputStream): void;
    setRawOffset(offsetMillis: number): void;
    unwrap(): TimeZone;
    useDaylightTime(): boolean;
}