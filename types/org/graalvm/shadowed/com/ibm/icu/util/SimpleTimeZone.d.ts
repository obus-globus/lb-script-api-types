import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnualTimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/AnnualTimeZoneRule.d.ts'
import type { BasicTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BasicTimeZone.d.ts'
import type { BasicTimeZone$LocalOption } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BasicTimeZone$LocalOption.d.ts'
import type { InitialTimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/InitialTimeZoneRule.d.ts'
import type { STZInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/STZInfo.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { TimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneRule.d.ts'
import type { TimeZoneTransition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneTransition.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class SimpleTimeZone extends BasicTimeZone {
    static GENERIC_LOCATION: number;
    static GMT_ZONE: TimeZone;
    static LONG: number;
    static LONG_GENERIC: number;
    static LONG_GMT: number;
    static SHORT: number;
    static SHORT_COMMONLY_USED: number;
    static SHORT_GENERIC: number;
    static SHORT_GMT: number;
    static STANDARD_TIME: number;
    static TIMEZONE_ICU: number;
    static TIMEZONE_JDK: number;
    static UNKNOWN_ZONE: TimeZone;
    static UNKNOWN_ZONE_ID: string;
    static UTC_TIME: number;
    static WALL_TIME: number;
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
    constructor(rawOffset: number, ID: string)
    constructor(rawOffset: number, ID: string, startMonth: number, startDay: number, startDayOfWeek: number, startTime: number, endMonth: number, endDay: number, endDayOfWeek: number, endTime: number)
    constructor(rawOffset: number, ID: string, startMonth: number, startDay: number, startDayOfWeek: number, startTime: number, endMonth: number, endDay: number, endDayOfWeek: number, endTime: number, dstSavings: number)
    constructor(rawOffset: number, ID: string, startMonth: number, startDay: number, startDayOfWeek: number, startTime: number, startTimeMode: number, endMonth: number, endDay: number, endDayOfWeek: number, endTime: number, endTimeMode: number, dstSavings: number)
    // private dst: number;
    // private dstRule: AnnualTimeZoneRule;
    // private endDay: number;
    // private endDayOfWeek: number;
    // private endMode: number;
    // private endMonth: number;
    // private endTime: number;
    // private endTimeMode: number;
    // private firstTransition: TimeZoneTransition;
    // private initialRule: InitialTimeZoneRule;
    // private isFrozen: boolean;
    // private raw: number;
    // private startDay: number;
    // private startDayOfWeek: number;
    // private startMode: number;
    // private startMonth: number;
    // private startTime: number;
    // private startTimeMode: number;
    readonly startYear: number;
    // private stdRule: AnnualTimeZoneRule;
    // private transitionRulesInitialized: boolean;
    // private useDaylight: boolean;
    // private xinfo: STZInfo;
    clone(): Object;
    cloneAsThawed(): TimeZone;
    // private compareToRule(month: number, monthLen: number, prevMonthLen: number, dayOfMonth: number, dayOfWeek: number, millis: number, millisDelta: number, ruleMode: number, ruleMonth: number, ruleDayOfWeek: number, ruleDay: number, ruleMillis: number): number;
    // private construct(_raw: number, _startMonth: number, _startDay: number, _startDayOfWeek: number, _startTime: number, _startTimeMode: number, _endMonth: number, _endDay: number, _endDayOfWeek: number, _endTime: number, _endTimeMode: number, _dst: number): void;
    // private decodeEndRule(): void;
    // private decodeRules(): void;
    // private decodeStartRule(): void;
    equals(obj: Object | null): boolean;
    freeze(): TimeZone;
    getDSTSavings(): number;
    getNextTransition(base: number, inclusive: boolean): TimeZoneTransition;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, millis: number): number;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, millis: number, monthLength: number): number;
    // private getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, millis: number, monthLength: number, prevMonthLength: number): number;
    getOffsetFromLocal(date: number, nonExistingTimeOpt: BasicTimeZone$LocalOption, duplicatedTimeOpt: BasicTimeZone$LocalOption, offsets: number[]): void;
    getPreviousTransition(base: number, inclusive: boolean): TimeZoneTransition;
    getRawOffset(): number;
    // private getSTZInfo(): STZInfo;
    getTimeZoneRules(): TimeZoneRule[];
    hasSameRules(othr: TimeZone): boolean;
    hashCode(): number;
    // private idEquals(id1: string, id2: string): boolean;
    inDaylightTime(date: Date): boolean;
    // private initTransitionRules(): void;
    isFrozen(): boolean;
    observesDaylightTime(): boolean;
    // private readObject(in_: ObjectInputStream): void;
    setDSTSavings(millisSavedDuringDST: number): void;
    setEndRule(month: number, dayOfMonth: number, time: number): void;
    setEndRule(month: number, dayOfWeekInMonth: number, dayOfWeek: number, time: number): void;
    setEndRule(month: number, dayOfMonth: number, dayOfWeek: number, time: number, after: boolean): void;
    // private setEndRule(month: number, dayOfWeekInMonth: number, dayOfWeek: number, time: number, mode: number): void;
    // private setEndRule(month: number, dayOfMonth: number, dayOfWeek: number, time: number, mode: number, after: boolean): void;
    setID(ID: string): void;
    setRawOffset(offsetMillis: number): void;
    setStartRule(month: number, dayOfMonth: number, time: number): void;
    setStartRule(month: number, dayOfWeekInMonth: number, dayOfWeek: number, time: number): void;
    setStartRule(month: number, dayOfMonth: number, dayOfWeek: number, time: number, after: boolean): void;
    // private setStartRule(month: number, dayOfWeekInMonth: number, dayOfWeek: number, time: number, mode: number): void;
    setStartYear(year: number): void;
    toString(): string;
    useDaylightTime(): boolean;
}