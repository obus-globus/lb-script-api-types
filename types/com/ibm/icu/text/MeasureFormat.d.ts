import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { ListFormatter } from '../../../../com/ibm/icu/text/ListFormatter.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { MeasureFormat$NumberFormatterCacheEntry } from '../../../../com/ibm/icu/text/MeasureFormat$NumberFormatterCacheEntry.d.ts'
import type { MeasureFormat$NumericFormatters } from '../../../../com/ibm/icu/text/MeasureFormat$NumericFormatters.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { Measure } from '../../../../com/ibm/icu/util/Measure.d.ts'
import type { MeasureUnit } from '../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class MeasureFormat extends UFormat {
    static getCurrencyFormat(): MeasureFormat;
    static getCurrencyFormat(paramarg0: ULocale): MeasureFormat;
    static getCurrencyFormat(paramarg0: Locale): MeasureFormat;
    static getInstance(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth, paramarg2: NumberFormat): MeasureFormat;
    static getInstance(paramarg0: Locale, paramarg1: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramarg0: Locale, paramarg1: MeasureFormat$FormatWidth, paramarg2: NumberFormat): MeasureFormat;
    static getRangeFormat(paramarg0: ULocale, paramarg1: MeasureFormat$FormatWidth): string;
    constructor(arg0: ULocale, arg1: MeasureFormat$FormatWidth)
    constructor(arg0: ULocale, arg1: MeasureFormat$FormatWidth, arg2: NumberFormat, arg3: PluralRules)
    private constructor(arg0: ULocale, arg1: MeasureFormat$FormatWidth, arg2: NumberFormat, arg3: PluralRules, arg4: MeasureFormat$NumericFormatters)
    // private formatWidth: MeasureFormat$FormatWidth;
    // private formatter1: MeasureFormat$NumberFormatterCacheEntry;
    // private formatter2: MeasureFormat$NumberFormatterCacheEntry;
    // private formatter3: MeasureFormat$NumberFormatterCacheEntry;
    readonly numberFormat: NumberFormat;
    // private numberFormatter: LocalizedNumberFormatter;
    // private numericFormatters: MeasureFormat$NumericFormatters;
    // private rules: PluralRules;
    clearCache(): void;
    equals(arg0: Object | null): boolean;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    // private formatMeasure(arg0: Measure): FormattedStringBuilder;
    // private formatMeasureInteger(arg0: Measure): FormattedStringBuilder;
    formatMeasurePerUnit(arg0: Measure, arg1: MeasureUnit, arg2: StringBuilder, arg3: FieldPosition): StringBuilder;
    formatMeasures(arg0: StringBuilder, arg1: FieldPosition, arg2: Measure[]): StringBuilder;
    formatMeasures(arg0: Measure[]): string;
    // private formatMeasuresInternal(arg0: Appendable, arg1: FieldPosition, arg2: Measure[]): void;
    // private formatMeasuresSlowTrack(arg0: ListFormatter, arg1: Appendable, arg2: FieldPosition, arg3: Measure[]): void;
    // private formatNumeric(arg0: Number[], arg1: Appendable): void;
    getLocale(): ULocale;
    getNumberFormat(): NumberFormat;
    getNumberFormatInternal(): NumberFormat;
    getNumberFormatter(): LocalizedNumberFormatter;
    getUnitDisplayName(arg0: MeasureUnit): string;
    // private getUnitFormatterFromCache(arg0: number, arg1: MeasureUnit, arg2: MeasureUnit): LocalizedNumberFormatter;
    getWidth(): MeasureFormat$FormatWidth;
    hashCode(): number;
    parseObject(arg0: string, arg1: ParsePosition): Measure;
    toCurrencyProxy(): Object;
    toTimeUnitProxy(): Object;
    withLocale(arg0: ULocale): MeasureFormat;
    withNumberFormat(arg0: NumberFormat): MeasureFormat;
    // private writeReplace(): Object;
}