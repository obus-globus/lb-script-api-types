import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { DateFormat$HourCycle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat$HourCycle.d.ts'
import type { DateTimePatternGenerator$DTPGflags } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$DTPGflags.d.ts'
import type { DateTimePatternGenerator$DateTimeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$DateTimeMatcher.d.ts'
import type { DateTimePatternGenerator$DisplayWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$DisplayWidth.d.ts'
import type { DateTimePatternGenerator$DistanceInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$DistanceInfo.d.ts'
import type { DateTimePatternGenerator$FormatParser } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$FormatParser.d.ts'
import type { DateTimePatternGenerator$PatternInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$PatternInfo.d.ts'
import type { DateTimePatternGenerator$PatternWithMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$PatternWithMatcher.d.ts'
import type { DateTimePatternGenerator$PatternWithSkeletonFlag } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$PatternWithSkeletonFlag.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class DateTimePatternGenerator extends Object implements Cloneable, Freezable<DateTimePatternGenerator> {
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
    static getAppendFormatNumber(paramstring: string): number;
    static getAppendFormatNumber(paramkey: UResource$Key): number;
    static getEmptyInstance(): DateTimePatternGenerator;
    static getFrozenInstance(paramuLocale: ULocale): DateTimePatternGenerator;
    static getInstance(): DateTimePatternGenerator;
    static getInstance(paramlocale: Locale): DateTimePatternGenerator;
    static getInstance(paramuLocale: ULocale): DateTimePatternGenerator;
    static getInstanceNoStdPat(paramuLocale: ULocale): DateTimePatternGenerator;
    static isSingleField(paramskeleton: string): boolean;
    constructor()
    // private _distanceInfo: DateTimePatternGenerator$DistanceInfo;
    // private allowedHourFormats: string[];
    // private appendItemFormats: string[];
    // private basePattern_pattern: JavaMap<string, DateTimePatternGenerator$PatternWithSkeletonFlag>;
    // private cldrAvailableFormatKeys: string[];
    // private current: DateTimePatternGenerator$DateTimeMatcher;
    // private dateTimeFormats: string[];
    readonly decimal: string;
    readonly defaultHourFormatChar: string;
    // private fieldDisplayNames: string[][];
    // private fp: DateTimePatternGenerator$FormatParser;
    readonly frozen: boolean;
    // private skeleton2pattern: JavaMap<DateTimePatternGenerator$DateTimeMatcher, DateTimePatternGenerator$PatternWithSkeletonFlag>;
    // private addCLDRData(returnInfo: DateTimePatternGenerator$PatternInfo, uLocale: ULocale): void;
    // private addCanonicalItems(): void;
    // private addICUPatterns(returnInfo: DateTimePatternGenerator$PatternInfo, uLocale: ULocale): void;
    addPattern(pattern: string, override: boolean, returnInfo: DateTimePatternGenerator$PatternInfo): DateTimePatternGenerator;
    addPatternWithSkeleton(pattern: string, skeletonToUse: string, override: boolean, returnInfo: DateTimePatternGenerator$PatternInfo): DateTimePatternGenerator;
    // private adjustFieldTypes(patternWithMatcher: DateTimePatternGenerator$PatternWithMatcher, inputRequest: DateTimePatternGenerator$DateTimeMatcher, flags: DateTimePatternGenerator$DTPGflags[], options: number): string;
    // private checkFrozen(): void;
    clone(): DateTimePatternGenerator;
    cloneAsThawed(): DateTimePatternGenerator;
    // private consumeShortTimePattern(shortTimePattern: string, returnInfo: DateTimePatternGenerator$PatternInfo): void;
    // private fillInMissing(): void;
    freeze(): DateTimePatternGenerator;
    // private getAllowedHourFormats(uLocale: ULocale): void;
    // private getAllowedHourFormatsLangCountry(language: string, country: string): string[];
    // private getAppendFormat(foundMask: number): string;
    getAppendItemFormat(field: number): string;
    getAppendItemName(field: number): string;
    // private getAppendName(foundMask: number): string;
    getBaseSkeleton(pattern: string): string;
    getBaseSkeletons(result: string[]): string[];
    // private getBestAppending(source: DateTimePatternGenerator$DateTimeMatcher, missingFields: number, distInfo: DateTimePatternGenerator$DistanceInfo, skipMatcher: DateTimePatternGenerator$DateTimeMatcher, flags: DateTimePatternGenerator$DTPGflags[], options: number): string;
    getBestPattern(skeleton: string): string;
    getBestPattern(skeleton: string, options: number): string;
    // private getBestPattern(skeleton: string, skipMatcher: DateTimePatternGenerator$DateTimeMatcher, options: number): string;
    // private getBestRaw(source: DateTimePatternGenerator$DateTimeMatcher, includeMask: number, missingFields: DateTimePatternGenerator$DistanceInfo, skipMatcher: DateTimePatternGenerator$DateTimeMatcher): DateTimePatternGenerator$PatternWithMatcher;
    // private getCalendarTypeToUse(uLocale: ULocale): string;
    getCanonicalSkeletonAllowingDuplicates(pattern: string): string;
    getDateTimeFormat(): string;
    getDateTimeFormat(style: number): string;
    getDecimal(): string;
    getDefaultHourCycle(): DateFormat$HourCycle;
    getDefaultHourFormatChar(): string;
    getFieldDisplayName(field: number, width: DateTimePatternGenerator$DisplayWidth): string;
    getFields(pattern: string): string;
    getRedundants(output: string[]): string[];
    // private getSet(id: string): string[];
    getSkeleton(pattern: string): string;
    getSkeletonAllowingDuplicates(pattern: string): string;
    getSkeletons(result: JavaMap<string, string>): JavaMap<string, string>;
    // private getTopBitNumber(foundMask: number): number;
    // private hackTimes(returnInfo: DateTimePatternGenerator$PatternInfo, shortTimePattern: string): void;
    // private initData(uLocale: ULocale, skipStdPatterns: boolean): void;
    // private isAvailableFormatSet(key: string): boolean;
    isFrozen(): boolean;
    // private mapSkeletonMetacharacters(skeleton: string, flags: DateTimePatternGenerator$DTPGflags[]): string;
    replaceFieldTypes(pattern: string, skeleton: string): string;
    replaceFieldTypes(pattern: string, skeleton: string, options: number): string;
    setAppendItemFormat(field: number, value: string): void;
    setAppendItemName(field: number, value: string): void;
    // private setAvailableFormat(key: string): void;
    setDateTimeFormat(style: number, dateTimeFormat: string): void;
    setDateTimeFormat(dateTimeFormat: string): void;
    // private setDateTimeFromCalendar(uLocale: ULocale): void;
    setDecimal(decimal: string): void;
    // private setDecimalSymbols(uLocale: ULocale): void;
    setDefaultHourFormatChar(defaultHourFormatChar: string): void;
    // private setFieldDisplayName(field: number, width: DateTimePatternGenerator$DisplayWidth, value: string): void;
    skeletonsAreSimilar(id: string, skeleton: string): boolean;
}