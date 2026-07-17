import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { MeasureFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { TimeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeUnit.d.ts'
import type { TimeUnitAmount } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeUnitAmount.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeUnitFormat extends MeasureFormat implements Cloneable {
    static ABBREVIATED_NAME: number;
    static FULL_NAME: number;
    static getCurrencyFormat(): MeasureFormat;
    static getCurrencyFormat(paramlocale: Locale): MeasureFormat;
    static getCurrencyFormat(paramlocale: ULocale): MeasureFormat;
    static getInstance(paramlocale: Locale, paramformatWidth: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramlocale: Locale, paramformatWidth: MeasureFormat$FormatWidth, paramformat: NumberFormat): MeasureFormat;
    static getInstance(paramlocale: ULocale, paramformatWidth: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramlocale: ULocale, paramformatWidth: MeasureFormat$FormatWidth, paramformat: NumberFormat): MeasureFormat;
    static getRangeFormat(paramforLocale: ULocale, paramwidth: MeasureFormat$FormatWidth): string;
    constructor()
    constructor(locale: Locale)
    constructor(locale: Locale, style: number)
    constructor(locale: ULocale)
    constructor(locale: ULocale, style: number)
    // private format: NumberFormat;
    // private isReady: boolean;
    readonly locale: ULocale;
    // private pluralRules: PluralRules;
    // private style: number;
    // private timeUnitToCountToPatterns: Map<TimeUnit, { [key: string]: Object[] }>;
    clone(): TimeUnitFormat;
    getNumberFormat(): NumberFormat;
    getNumberFormatInternal(): NumberFormat;
    getNumberFormatter(): LocalizedNumberFormatter;
    parseObject(arg0: string): Object;
    parseObject(source: string, pos: ParsePosition): TimeUnitAmount;
    // private readResolve(): Object;
    // private searchInTree(resourceKey: string, styl: number, timeUnit: TimeUnit, srcPluralCount: string, searchPluralCount: string, countToPatterns: { [key: string]: Object[] }): void;
    setLocale(locale: Locale): TimeUnitFormat;
    setLocale(locale: ULocale): TimeUnitFormat;
    setLocale(valid: ULocale, actual: ULocale): void;
    setNumberFormat(format: NumberFormat): TimeUnitFormat;
    // private setup(): void;
    // private setup(resourceKey: string, timeUnitToCountToPatterns: Map<TimeUnit, { [key: string]: Object[] }>, style: number, pluralKeywords: string[]): void;
    // private writeReplace(): Object;
}