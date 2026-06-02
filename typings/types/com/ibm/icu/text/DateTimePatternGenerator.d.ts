import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { DateFormat$HourCycle } from '../../../../com/ibm/icu/text/DateFormat$HourCycle.d.ts'
import type { DateTimePatternGenerator$DTPGflags } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$DTPGflags.d.ts'
import type { DateTimePatternGenerator$DateTimeMatcher } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$DateTimeMatcher.d.ts'
import type { DateTimePatternGenerator$DisplayWidth } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$DisplayWidth.d.ts'
import type { DateTimePatternGenerator$DistanceInfo } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$DistanceInfo.d.ts'
import type { DateTimePatternGenerator$FormatParser } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$FormatParser.d.ts'
import type { DateTimePatternGenerator$PatternInfo } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$PatternInfo.d.ts'
import type { DateTimePatternGenerator$PatternWithMatcher } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$PatternWithMatcher.d.ts'
import type { DateTimePatternGenerator$PatternWithSkeletonFlag } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$PatternWithSkeletonFlag.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class DateTimePatternGenerator extends Object implements Freezable<DateTimePatternGenerator>, Cloneable {
    static DAY: number;
    static DAYPERIOD: number;
    static DAY_OF_WEEK_IN_MONTH: number;
    static DAY_OF_YEAR: number;
    static ERA: number;
    static FRACTIONAL_SECOND: number;
    static HOUR: number;
    static MATCH_ALL_FIELDS_LENGTH: number;
    static MATCH_HOUR_FIELD_LENGTH: number;
    static MATCH_MINUTE_FIELD_LENGTH: number;
    static MATCH_NO_OPTIONS: number;
    static MATCH_SECOND_FIELD_LENGTH: number;
    static MINUTE: number;
    static MONTH: number;
    static QUARTER: number;
    static SECOND: number;
    static TYPE_LIMIT: number;
    static WEEKDAY: number;
    static WEEK_OF_MONTH: number;
    static WEEK_OF_YEAR: number;
    static YEAR: number;
    static ZONE: number;
    static getAppendFormatNumber(paramarg0: UResource$Key): number;
    static getAppendFormatNumber(paramarg0: string): number;
    static getEmptyInstance(): DateTimePatternGenerator;
    static getFrozenInstance(paramarg0: ULocale): DateTimePatternGenerator;
    static getInstance(): DateTimePatternGenerator;
    static getInstance(paramarg0: ULocale): DateTimePatternGenerator;
    static getInstance(paramarg0: Locale): DateTimePatternGenerator;
    static getInstanceNoStdPat(paramarg0: ULocale): DateTimePatternGenerator;
    static isSingleField(paramarg0: string): boolean;
    constructor()
    // private _distanceInfo: DateTimePatternGenerator$DistanceInfo;
    // private allowedHourFormats: string[];
    // private appendItemFormats: string[];
    // private basePattern_pattern: { [key: string]: DateTimePatternGenerator$PatternWithSkeletonFlag };
    // private cldrAvailableFormatKeys: string[];
    // private current: DateTimePatternGenerator$DateTimeMatcher;
    // private dateTimeFormats: string[];
    readonly decimal: string;
    readonly defaultHourFormatChar: string;
    // private fieldDisplayNames: string[][];
    // private fp: DateTimePatternGenerator$FormatParser;
    readonly frozen: boolean;
    // private skeleton2pattern: Map<DateTimePatternGenerator$DateTimeMatcher, DateTimePatternGenerator$PatternWithSkeletonFlag>;
    // private addCLDRData(arg0: DateTimePatternGenerator$PatternInfo, arg1: ULocale): void;
    // private addCanonicalItems(): void;
    // private addICUPatterns(arg0: DateTimePatternGenerator$PatternInfo, arg1: ULocale): void;
    addPattern(arg0: string, arg1: boolean, arg2: DateTimePatternGenerator$PatternInfo): DateTimePatternGenerator;
    addPatternWithSkeleton(arg0: string, arg1: string, arg2: boolean, arg3: DateTimePatternGenerator$PatternInfo): DateTimePatternGenerator;
    // private adjustFieldTypes(arg0: DateTimePatternGenerator$PatternWithMatcher, arg1: DateTimePatternGenerator$DateTimeMatcher, arg2: DateTimePatternGenerator$DTPGflags[], arg3: number): string;
    // private checkFrozen(): void;
    clone(): Object;
    protected clone(): Object;
    cloneAsThawed(): DateTimePatternGenerator;
    // private consumeShortTimePattern(arg0: string, arg1: DateTimePatternGenerator$PatternInfo): void;
    // private fillInMissing(): void;
    freeze(): DateTimePatternGenerator;
    // private getAllowedHourFormats(arg0: ULocale): void;
    // private getAllowedHourFormatsLangCountry(arg0: string, arg1: string): string[];
    // private getAppendFormat(arg0: number): string;
    getAppendItemFormat(arg0: number): string;
    getAppendItemName(arg0: number): string;
    // private getAppendName(arg0: number): string;
    getBaseSkeleton(arg0: string): string;
    getBaseSkeletons(arg0: string[]): string[];
    // private getBestAppending(arg0: DateTimePatternGenerator$DateTimeMatcher, arg1: number, arg2: DateTimePatternGenerator$DistanceInfo, arg3: DateTimePatternGenerator$DateTimeMatcher, arg4: DateTimePatternGenerator$DTPGflags[], arg5: number): string;
    getBestPattern(arg0: string): string;
    // private getBestPattern(arg0: string, arg1: DateTimePatternGenerator$DateTimeMatcher, arg2: number): string;
    getBestPattern(arg0: string, arg1: number): string;
    // private getBestRaw(arg0: DateTimePatternGenerator$DateTimeMatcher, arg1: number, arg2: DateTimePatternGenerator$DistanceInfo, arg3: DateTimePatternGenerator$DateTimeMatcher): DateTimePatternGenerator$PatternWithMatcher;
    // private getCalendarTypeToUse(arg0: ULocale): string;
    getCanonicalSkeletonAllowingDuplicates(arg0: string): string;
    getDateTimeFormat(): string;
    getDateTimeFormat(arg0: number): string;
    getDecimal(): string;
    getDefaultHourCycle(): DateFormat$HourCycle;
    getDefaultHourFormatChar(): string;
    getFieldDisplayName(arg0: number, arg1: DateTimePatternGenerator$DisplayWidth): string;
    getFields(arg0: string): string;
    getRedundants(arg0: E[]): E[];
    // private getSet(arg0: string): string[];
    getSkeleton(arg0: string): string;
    getSkeletonAllowingDuplicates(arg0: string): string;
    getSkeletons(arg0: { [key: string]: string }): { [key: string]: string };
    // private getTopBitNumber(arg0: number): number;
    // private hackTimes(arg0: DateTimePatternGenerator$PatternInfo, arg1: string): void;
    // private initData(arg0: ULocale, arg1: boolean): void;
    // private isAvailableFormatSet(arg0: string): boolean;
    isFrozen(): boolean;
    // private mapSkeletonMetacharacters(arg0: string, arg1: DateTimePatternGenerator$DTPGflags[]): string;
    replaceFieldTypes(arg0: string, arg1: string): string;
    replaceFieldTypes(arg0: string, arg1: string, arg2: number): string;
    setAppendItemFormat(arg0: number, arg1: string): void;
    setAppendItemName(arg0: number, arg1: string): void;
    // private setAvailableFormat(arg0: string): void;
    setDateTimeFormat(arg0: number, arg1: string): void;
    setDateTimeFormat(arg0: string): void;
    // private setDateTimeFromCalendar(arg0: ULocale): void;
    setDecimal(arg0: string): void;
    // private setDecimalSymbols(arg0: ULocale): void;
    setDefaultHourFormatChar(arg0: string): void;
    // private setFieldDisplayName(arg0: number, arg1: DateTimePatternGenerator$DisplayWidth, arg2: string): void;
    skeletonsAreSimilar(arg0: string, arg1: string): boolean;
}