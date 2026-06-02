import type { AnnualTimeZoneRule } from '../../../../com/ibm/icu/util/AnnualTimeZoneRule.d.ts'
import type { BasicTimeZone } from '../../../../com/ibm/icu/util/BasicTimeZone.d.ts'
import type { BasicTimeZone$LocalOption } from '../../../../com/ibm/icu/util/BasicTimeZone$LocalOption.d.ts'
import type { InitialTimeZoneRule } from '../../../../com/ibm/icu/util/InitialTimeZoneRule.d.ts'
import type { STZInfo } from '../../../../com/ibm/icu/util/STZInfo.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { TimeZoneTransition } from '../../../../com/ibm/icu/util/TimeZoneTransition.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static countEquivalentIDs(paramarg0: string): number;
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
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
    constructor(arg0: number, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number)
    constructor(arg0: number, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number)
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
    // private compareToRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): number;
    // private construct(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
    // private decodeEndRule(): void;
    // private decodeRules(): void;
    // private decodeStartRule(): void;
    equals(arg0: Object | null): boolean;
    freeze(): TimeZone;
    getDSTSavings(): number;
    getNextTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
    // private getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
    getOffsetFromLocal(arg0: number, arg1: BasicTimeZone$LocalOption, arg2: BasicTimeZone$LocalOption, arg3: number[]): void;
    getPreviousTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getRawOffset(): number;
    // private getSTZInfo(): STZInfo;
    getTimeZoneRules(): TimeZoneRule[];
    hasSameRules(arg0: TimeZone): boolean;
    hashCode(): number;
    // private idEquals(arg0: string, arg1: string): boolean;
    inDaylightTime(arg0: Date): boolean;
    // private initTransitionRules(): void;
    isFrozen(): boolean;
    observesDaylightTime(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    setDSTSavings(arg0: number): void;
    setEndRule(arg0: number, arg1: number, arg2: number): void;
    setEndRule(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setEndRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    // private setEndRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    // private setEndRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
    setID(arg0: string): void;
    setRawOffset(arg0: number): void;
    setStartRule(arg0: number, arg1: number, arg2: number): void;
    setStartRule(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setStartRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    // private setStartRule(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    setStartYear(arg0: number): void;
    toString(): string;
    useDaylightTime(): boolean;
}