import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Calendar } from '../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { TimeZone as TimeZone_2 } from '../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JavaTimeZone extends TimeZone {
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
    static countEquivalentIDs(paramarg0: string): number;
    static createTimeZone(paramarg0: string): JavaTimeZone;
    static forLocaleOrDefault(paramarg0: Locale): TimeZone;
    static forULocaleOrDefault(paramarg0: ULocale): TimeZone;
    static getAvailableIDs(): (Object | null)[];
    static getAvailableIDs(paramarg0: number): (Object | null)[];
    static getAvailableIDs(paramarg0: string): (Object | null)[];
    static getAvailableIDs(paramarg0: TimeZone$SystemTimeZoneType, paramarg1: string, paramarg2: number): string[];
    static getCanonicalID(paramarg0: string): string;
    static getCanonicalID(paramarg0: string, paramarg1: (Object | null)[]): string;
    static getDefault(): TimeZone;
    static getDefaultTimeZoneType(): number;
    static getEquivalentID(paramarg0: string, paramarg1: number): string;
    static getFrozenTimeZone(paramarg0: string): TimeZone;
    static getIDForWindowsID(paramarg0: string, paramarg1: string): string;
    static getIanaID(paramarg0: string): string;
    static getRegion(paramarg0: string): string;
    static getTZDataVersion(): string;
    static getTimeZone(paramarg0: string): TimeZone;
    static getTimeZone(paramarg0: string, paramarg1: number): TimeZone;
    static getWindowsID(paramarg0: string): string;
    static setDefault(paramarg0: TimeZone): void;
    static setDefaultTimeZoneType(paramarg0: number): void;
    static setICUDefault(paramarg0: TimeZone): void;
    constructor()
    constructor(arg0: TimeZone_2, arg1: string)
    // private isFrozen: boolean;
    // private javacal: Calendar;
    // private javatz: TimeZone_2;
    clone(): Object;
    cloneAsThawed(): TimeZone;
    freeze(): TimeZone;
    getDSTSavings(): number;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    getOffset(arg0: number): number;
    getOffset(arg0: number, arg1: boolean, arg2: number[]): void;
    getRawOffset(): number;
    hashCode(): number;
    inDaylightTime(arg0: Date): boolean;
    isFrozen(): boolean;
    observesDaylightTime(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    setRawOffset(arg0: number): void;
    unwrap(): TimeZone_2;
    useDaylightTime(): boolean;
}