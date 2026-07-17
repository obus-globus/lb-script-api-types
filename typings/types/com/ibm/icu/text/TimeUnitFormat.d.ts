import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { MeasureFormat } from '../../../../com/ibm/icu/text/MeasureFormat.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { TimeUnit } from '../../../../com/ibm/icu/util/TimeUnit.d.ts'
import type { TimeUnitAmount } from '../../../../com/ibm/icu/util/TimeUnitAmount.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class TimeUnitFormat extends MeasureFormat implements Cloneable {
    static ABBREVIATED_NAME: number;
    static FULL_NAME: number;
    static getCurrencyFormat(): MeasureFormat;
    static getCurrencyFormat(paramarg0: ULocale): MeasureFormat;
    static getCurrencyFormat(paramarg0: Locale): MeasureFormat;
    static getInstance(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth, paramarg2: NumberFormat): MeasureFormat;
    static getInstance(paramarg0: Locale, paramarg1: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramarg0: Locale, paramarg1: MeasureFormat$FormatWidth, paramarg2: NumberFormat): MeasureFormat;
    static getRangeFormat(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth): string;
    constructor()
    constructor(arg0: ULocale)
    constructor(arg0: ULocale, arg1: number)
    constructor(arg0: Locale)
    constructor(arg0: Locale, arg1: number)
    // private format: NumberFormat;
    // private isReady: boolean;
    readonly locale: ULocale;
    // private pluralRules: PluralRules;
    // private style: number;
    // private timeUnitToCountToPatterns: JavaMap<TimeUnit, JavaMap<string, Object[]>>;
    clone(): TimeUnitFormat;
    getNumberFormat(): NumberFormat;
    getNumberFormatInternal(): NumberFormat;
    getNumberFormatter(): LocalizedNumberFormatter;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): TimeUnitAmount;
    // private readResolve(): Object;
    // private searchInTree(arg0: string, arg1: number, arg2: TimeUnit, arg3: string, arg4: string, arg5: JavaMap<string, Object[]>): void;
    setLocale(arg0: ULocale): TimeUnitFormat;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setLocale(arg0: Locale): TimeUnitFormat;
    setNumberFormat(arg0: NumberFormat): TimeUnitFormat;
    // private setup(): void;
    // private setup(arg0: string, arg1: JavaMap<TimeUnit, JavaMap<string, Object[]>>, arg2: number, arg3: string[]): void;
    // private writeReplace(): Object;
}