import type { BasicTimeZone$LocalOption } from '../../../../com/ibm/icu/util/BasicTimeZone$LocalOption.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { TimeZoneTransition } from '../../../../com/ibm/icu/util/TimeZoneTransition.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export abstract class BasicTimeZone extends TimeZone {
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
    static getAvailableIDs(): string[];
    static getAvailableIDs(paramarg0: number): string[];
    static getAvailableIDs(paramarg0: string): string[];
    static getAvailableIDs(paramarg0: TimeZone$SystemTimeZoneType, paramarg1: string, paramarg2: number): string[];
    static getCanonicalID(paramarg0: string): string;
    static getCanonicalID(paramarg0: string, paramarg1: boolean[]): string;
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
    constructor(arg0: string)
    getNextTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getOffsetFromLocal(arg0: number, arg1: BasicTimeZone$LocalOption, arg2: BasicTimeZone$LocalOption, arg3: number[]): void;
    getPreviousTransition(arg0: number, arg1: boolean): TimeZoneTransition;
    getSimpleTimeZoneRulesNear(arg0: number): TimeZoneRule[];
    getTimeZoneRules(): TimeZoneRule[];
    getTimeZoneRules(arg0: number): TimeZoneRule[];
    hasEquivalentTransitions(arg0: TimeZone, arg1: number, arg2: number): boolean;
    hasEquivalentTransitions(arg0: TimeZone, arg1: number, arg2: number, arg3: boolean): boolean;
}