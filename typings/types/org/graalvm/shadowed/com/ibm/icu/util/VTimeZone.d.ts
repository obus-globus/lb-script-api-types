import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BasicTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BasicTimeZone.d.ts'
import type { BasicTimeZone$LocalOption } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BasicTimeZone$LocalOption.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { TimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneRule.d.ts'
import type { TimeZoneTransition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneTransition.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
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
    static countEquivalentIDs(paramid: string): number;
    static create(paramreader: Reader): VTimeZone;
    static create(paramtzid: string): VTimeZone;
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
    private constructor()
    private constructor(tzid: string)
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
    getNextTransition(base: number, inclusive: boolean): TimeZoneTransition;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, milliseconds: number): number;
    getOffset(date: number): number;
    getOffset(date: number, local: boolean, offsets: number[]): void;
    getOffsetFromLocal(date: number, nonExistingTimeOpt: BasicTimeZone$LocalOption, duplicatedTimeOpt: BasicTimeZone$LocalOption, offsets: number[]): void;
    getPreviousTransition(base: number, inclusive: boolean): TimeZoneTransition;
    getRawOffset(): number;
    getTZURL(): string;
    getTimeZoneRules(): TimeZoneRule[];
    getTimeZoneRules(start: number): TimeZoneRule[];
    hasEquivalentTransitions(other: TimeZone, start: number, end: number): boolean;
    hasEquivalentTransitions(tz: TimeZone, start: number, end: number, ignoreDstAmount: boolean): boolean;
    hasSameRules(other: TimeZone): boolean;
    inDaylightTime(date: Date): boolean;
    isFrozen(): boolean;
    // private load(reader: Reader): boolean;
    observesDaylightTime(): boolean;
    // private parse(): boolean;
    setLastModified(date: Date): void;
    setRawOffset(offsetMillis: number): void;
    setTZURL(url: string): void;
    useDaylightTime(): boolean;
    write(writer: Writer): void;
    write(writer: Writer, start: number): void;
    // private writeHeader(writer: Writer): void;
    writeSimple(writer: Writer, time: number): void;
    // private writeZone(w: Writer, basictz: BasicTimeZone, customProperties: string[]): void;
}