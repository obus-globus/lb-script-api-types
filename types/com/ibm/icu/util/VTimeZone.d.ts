import type { BasicTimeZone } from '../../../../com/ibm/icu/util/BasicTimeZone.d.ts'
import type { BasicTimeZone$LocalOption } from '../../../../com/ibm/icu/util/BasicTimeZone$LocalOption.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { TimeZoneTransition } from '../../../../com/ibm/icu/util/TimeZoneTransition.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VTimeZone extends BasicTimeZone {
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
    static create(paramarg0: Reader): VTimeZone;
    static create(paramarg0: string): VTimeZone;
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
    private constructor()
    private constructor(arg0: string)
    // private isFrozen: boolean;
    // private lastmod: Date;
    // private olsonzid: string;
    // private tz: BasicTimeZone;
    // private tzurl: string;
    // private vtzlines: string[];
    clone(): Object;
    cloneAsThawed(): TimeZone;
    freeze(): TimeZone;
    getLastModified(): Date;
    getNextTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    getOffset(arg0: number, arg1: boolean, arg2: number[]): void;
    getOffsetFromLocal(arg0: number, arg1: BasicTimeZone$LocalOption, arg2: BasicTimeZone$LocalOption, arg3: number[]): void;
    getPreviousTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getRawOffset(): number;
    getTZURL(): string;
    getTimeZoneRules(): TimeZoneRule[];
    getTimeZoneRules(arg0: number): TimeZoneRule[];
    hasEquivalentTransitions(arg0: TimeZone, arg1: number, arg2: number): boolean;
    hasSameRules(arg0: TimeZone): boolean;
    inDaylightTime(arg0: Date): boolean;
    isFrozen(): boolean;
    // private load(arg0: Reader): boolean;
    observesDaylightTime(): boolean;
    // private parse(): boolean;
    setLastModified(arg0: Date): void;
    setRawOffset(arg0: number): void;
    setTZURL(arg0: string): void;
    useDaylightTime(): boolean;
    write(arg0: Writer): void;
    write(arg0: Writer, arg1: number): void;
    // private writeHeader(arg0: Writer): void;
    writeSimple(arg0: Writer, arg1: number): void;
    // private writeZone(arg0: Writer, arg1: BasicTimeZone, arg2: string[]): void;
}