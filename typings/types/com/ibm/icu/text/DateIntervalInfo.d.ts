import type { DateIntervalFormat$BestMatchInfo } from '../../../../com/ibm/icu/text/DateIntervalFormat$BestMatchInfo.d.ts'
import type { DateIntervalInfo$PatternInfo } from '../../../../com/ibm/icu/text/DateIntervalInfo$PatternInfo.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class DateIntervalInfo extends Object implements Freezable<DateIntervalInfo>, Serializable, Cloneable {
    static genPatternInfo(paramarg0: string, paramarg1: boolean): DateIntervalInfo$PatternInfo;
    constructor()
    constructor(arg0: ULocale)
    constructor(arg0: Locale)
    // private fFallbackIntervalPattern: string;
    // private fFirstDateInPtnIsLaterDate: boolean;
    // private fIntervalPatterns: { [key: string]: { [key: string]: DateIntervalInfo$PatternInfo } };
    // private fIntervalPatternsReadOnly: boolean;
    readonly frozen: boolean;
    clone(): DateIntervalInfo;
    cloneAsThawed(): DateIntervalInfo;
    // private cloneUnfrozenDII(): DateIntervalInfo;
    equals(arg0: Object | null): boolean;
    freeze(): DateIntervalInfo;
    getBestSkeleton(arg0: string): DateIntervalFormat$BestMatchInfo;
    getDefaultOrder(): boolean;
    getFallbackIntervalPattern(): string;
    getIntervalPattern(arg0: string, arg1: number): DateIntervalInfo$PatternInfo;
    getPatterns(): { [key: string]: string[] };
    getRawPatterns(): { [key: string]: { [key: string]: DateIntervalInfo$PatternInfo } };
    hashCode(): number;
    // private initializeData(arg0: ULocale): void;
    // private initializeFromReadOnlyPatterns(arg0: DateIntervalInfo): void;
    isFrozen(): boolean;
    setFallbackIntervalPattern(arg0: string): void;
    setIntervalPattern(arg0: string, arg1: number, arg2: string): void;
    // private setIntervalPattern(arg0: string, arg1: string, arg2: DateIntervalInfo$PatternInfo): void;
    // private setIntervalPatternInternally(arg0: string, arg1: string, arg2: string): DateIntervalInfo$PatternInfo;
    // private setup(arg0: ULocale): void;
}