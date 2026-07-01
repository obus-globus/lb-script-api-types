import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { DateIntervalFormat$BestMatchInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalFormat$BestMatchInfo.d.ts'
import type { DateIntervalInfo$PatternInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalInfo$PatternInfo.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class DateIntervalInfo extends Object implements Serializable, Cloneable, Freezable<DateIntervalInfo> {
    static genPatternInfo(paramintervalPattern: string, paramlaterDateFirst: boolean): DateIntervalInfo$PatternInfo;
    constructor()
    constructor(locale: Locale)
    constructor(locale: ULocale)
    // private fFallbackIntervalPattern: string;
    // private fFirstDateInPtnIsLaterDate: boolean;
    // private fIntervalPatterns: { [key: string]: { [key: string]: DateIntervalInfo$PatternInfo } };
    // private fIntervalPatternsReadOnly: boolean;
    readonly frozen: boolean;
    clone(): Object;
    cloneAsThawed(): DateIntervalInfo;
    // private cloneUnfrozenDII(): Object;
    equals(a: Object | null): boolean;
    freeze(): DateIntervalInfo;
    getBestSkeleton(inputSkeleton: string): DateIntervalFormat$BestMatchInfo;
    getDefaultOrder(): boolean;
    getFallbackIntervalPattern(): string;
    getIntervalPattern(skeleton: string, field: number): DateIntervalInfo$PatternInfo;
    getPatterns(): { [key: string]: string[] };
    getRawPatterns(): { [key: string]: { [key: string]: DateIntervalInfo$PatternInfo } };
    hashCode(): number;
    // private initializeData(locale: ULocale): void;
    // private initializeFromReadOnlyPatterns(dii: DateIntervalInfo): void;
    isFrozen(): boolean;
    setFallbackIntervalPattern(fallbackPattern: string): void;
    setIntervalPattern(skeleton: string, lrgDiffCalUnit: number, intervalPattern: string): void;
    // private setIntervalPattern(skeleton: string, lrgDiffCalUnit: string, ptnInfo: DateIntervalInfo$PatternInfo): void;
    // private setIntervalPatternInternally(skeleton: string, lrgDiffCalUnit: string, intervalPattern: string): DateIntervalInfo$PatternInfo;
    // private setup(locale: ULocale): void;
}