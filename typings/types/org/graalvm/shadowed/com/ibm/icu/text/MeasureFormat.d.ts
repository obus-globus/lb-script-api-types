import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { ListFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { MeasureFormat$NumberFormatterCacheEntry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat$NumberFormatterCacheEntry.d.ts'
import type { MeasureFormat$NumericFormatters } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat$NumericFormatters.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { Measure } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Measure.d.ts'
import type { MeasureUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
export class MeasureFormat extends UFormat {
    static getCurrencyFormat(): MeasureFormat;
    static getCurrencyFormat(paramlocale: Locale): MeasureFormat;
    static getCurrencyFormat(paramlocale: ULocale): MeasureFormat;
    static getInstance(paramlocale: Locale, paramformatWidth: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramlocale: Locale, paramformatWidth: MeasureFormat$FormatWidth, paramformat: NumberFormat): MeasureFormat;
    static getInstance(paramlocale: ULocale, paramformatWidth: MeasureFormat$FormatWidth): MeasureFormat;
    static getInstance(paramlocale: ULocale, paramformatWidth: MeasureFormat$FormatWidth, paramformat: NumberFormat): MeasureFormat;
    static getRangeFormat(paramforLocale: ULocale, paramwidth: MeasureFormat$FormatWidth): string;
    constructor(locale: ULocale, formatWidth: MeasureFormat$FormatWidth)
    constructor(locale: ULocale, formatWidth: MeasureFormat$FormatWidth, numberFormat: NumberFormat, rules: PluralRules)
    // private formatWidth: MeasureFormat$FormatWidth;
    // private formatter1: MeasureFormat$NumberFormatterCacheEntry;
    // private formatter2: MeasureFormat$NumberFormatterCacheEntry;
    // private formatter3: MeasureFormat$NumberFormatterCacheEntry;
    readonly numberFormat: NumberFormat;
    // private numberFormatter: LocalizedNumberFormatter;
    // private numericFormatters: MeasureFormat$NumericFormatters;
    // private rules: PluralRules;
    clearCache(): void;
    equals(other: Object | null): boolean;
    format(arg0: Object): string;
    format(obj: Object, toAppendTo: StringBuffer, fpos: FieldPosition): StringBuffer;
    // private formatMeasure(measure: Measure): FormattedStringBuilder;
    // private formatMeasureInteger(measure: Measure): FormattedStringBuilder;
    formatMeasurePerUnit(measure: Measure, perUnit: MeasureUnit, appendTo: StringBuilder, pos: FieldPosition): StringBuilder;
    formatMeasures(appendTo: StringBuilder, fpos: FieldPosition, measures: Measure[]): StringBuilder;
    formatMeasures(measures: Measure[]): string;
    // private formatMeasuresInternal(appendTo: Appendable, fieldPosition: FieldPosition, measures: Measure[]): void;
    // private formatMeasuresSlowTrack(listFormatter: ListFormatter, appendTo: Appendable, fieldPosition: FieldPosition, measures: Measure[]): void;
    // private formatNumeric(hms: Number[], appendable: Appendable): void;
    getLocale(): ULocale;
    getLocale(type: ULocale$Type): ULocale;
    getNumberFormat(): NumberFormat;
    getNumberFormatInternal(): NumberFormat;
    getNumberFormatter(): LocalizedNumberFormatter;
    getUnitDisplayName(unit: MeasureUnit): string;
    // private getUnitFormatterFromCache(type: number, unit: MeasureUnit, perUnit: MeasureUnit): LocalizedNumberFormatter;
    getWidth(): MeasureFormat$FormatWidth;
    hashCode(): number;
    parseObject(arg0: string): Object;
    parseObject(source: string, pos: ParsePosition): Measure;
    toCurrencyProxy(): Object;
    toTimeUnitProxy(): Object;
    withLocale(locale: ULocale): MeasureFormat;
    withNumberFormat(format: NumberFormat): MeasureFormat;
    // private writeReplace(): Object;
}