import type { BasicTimeZone } from '../../../../com/ibm/icu/util/BasicTimeZone.d.ts'
import type { BasicTimeZone$LocalOption } from '../../../../com/ibm/icu/util/BasicTimeZone$LocalOption.d.ts'
import type { InitialTimeZoneRule } from '../../../../com/ibm/icu/util/InitialTimeZoneRule.d.ts'
import type { SimpleTimeZone } from '../../../../com/ibm/icu/util/SimpleTimeZone.d.ts'
import type { TimeArrayTimeZoneRule } from '../../../../com/ibm/icu/util/TimeArrayTimeZoneRule.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { TimeZoneTransition } from '../../../../com/ibm/icu/util/TimeZoneTransition.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    constructor(arg0: UResourceBundle, arg1: UResourceBundle, arg2: string)
    constructor(arg0: string)
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
    // private construct(arg0: UResourceBundle, arg1: UResourceBundle, arg2: string): void;
    // private constructEmpty(): void;
    // private dstOffsetAt(arg0: number): number;
    equals(arg0: Object | null): boolean;
    freeze(): TimeZone;
    getCanonicalID(): string;
    getDSTSavings(): number;
    // private getHistoricalOffset(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number[]): void;
    // private getInt(arg0: number): number;
    getNextTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
    getOffset(arg0: number, arg1: boolean, arg2: number[]): void;
    getOffsetFromLocal(arg0: number, arg1: BasicTimeZone$LocalOption, arg2: BasicTimeZone$LocalOption, arg3: number[]): void;
    getPreviousTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getRawOffset(): number;
    getTimeZoneRules(): TimeZoneRule[];
    hasSameRules(arg0: TimeZone): boolean;
    hashCode(): number;
    inDaylightTime(arg0: Date): boolean;
    // private initTransitionRules(): void;
    // private initialDstOffset(): number;
    // private initialRawOffset(): number;
    isFrozen(): boolean;
    observesDaylightTime(): boolean;
    // private rawOffsetAt(arg0: number): number;
    // private readObject(arg0: ObjectInputStream): void;
    setID(arg0: string): void;
    setRawOffset(arg0: number): void;
    toString(): string;
    useDaylightTime(): boolean;
    // private zoneOffsetAt(arg0: number): number;
}