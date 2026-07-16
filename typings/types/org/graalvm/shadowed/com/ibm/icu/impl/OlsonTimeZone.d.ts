import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BasicTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BasicTimeZone.d.ts'
import type { BasicTimeZone$LocalOption } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BasicTimeZone$LocalOption.d.ts'
import type { InitialTimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/InitialTimeZoneRule.d.ts'
import type { SimpleTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/SimpleTimeZone.d.ts'
import type { TimeArrayTimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeArrayTimeZoneRule.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { TimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneRule.d.ts'
import type { TimeZoneTransition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneTransition.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class OlsonTimeZone extends BasicTimeZone {
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
    constructor(id: string)
    constructor(top: UResourceBundle, res: UResourceBundle, id: string)
    readonly canonicalID: string;
    // private finalStartMillis: number;
    // private finalStartYear: number;
    // private finalZone: SimpleTimeZone;
    // private finalZoneWithStartYear: SimpleTimeZone;
    // private firstFinalTZTransition: TimeZoneTransition;
    // private firstTZTransition: TimeZoneTransition;
    // private firstTZTransitionIdx: number;
    // private historicRules: TimeArrayTimeZoneRule[];
    // private initialRule: InitialTimeZoneRule;
    // private isFrozen: boolean;
    // private serialVersionOnStream: number;
    // private transitionCount: number;
    // private transitionRulesInitialized: boolean;
    // private transitionTimes64: number[];
    // private typeCount: number;
    // private typeMapData: number[];
    // private typeOffsets: number[];
    clone(): Object;
    cloneAsThawed(): TimeZone;
    // private construct(top: UResourceBundle, res: UResourceBundle, id: string): void;
    // private constructEmpty(): void;
    // private dstOffsetAt(transIdx: number): number;
    equals(obj: Object | null): boolean;
    freeze(): TimeZone;
    getCanonicalID(): string;
    getDSTSavings(): number;
    // private getHistoricalOffset(date: number, local: boolean, NonExistingTimeOpt: number, DuplicatedTimeOpt: number, offsets: number[]): void;
    // private getInt(val: number): number;
    getNextTransition(base: number, inclusive: boolean): TimeZoneTransition;
    getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, milliseconds: number): number;
    getOffset(era: number, year: number, month: number, dom: number, dow: number, millis: number, monthLength: number): number;
    getOffset(date: number): number;
    getOffset(date: number, local: boolean, offsets: number[]): void;
    getOffsetFromLocal(date: number, nonExistingTimeOpt: BasicTimeZone$LocalOption, duplicatedTimeOpt: BasicTimeZone$LocalOption, offsets: number[]): void;
    getPreviousTransition(base: number, inclusive: boolean): TimeZoneTransition;
    getRawOffset(): number;
    getTimeZoneRules(): TimeZoneRule[];
    getTimeZoneRules(start: number): TimeZoneRule[];
    hasSameRules(other: TimeZone): boolean;
    hashCode(): number;
    inDaylightTime(date: Date): boolean;
    // private initTransitionRules(): void;
    // private initialDstOffset(): number;
    // private initialRawOffset(): number;
    isFrozen(): boolean;
    observesDaylightTime(): boolean;
    // private rawOffsetAt(transIdx: number): number;
    // private readObject(stream: ObjectInputStream): void;
    setID(id: string): void;
    setRawOffset(offsetMillis: number): void;
    toString(): string;
    useDaylightTime(): boolean;
    // private zoneOffsetAt(transIdx: number): number;
}