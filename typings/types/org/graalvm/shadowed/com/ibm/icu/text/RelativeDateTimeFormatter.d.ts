import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { StandardPlural } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { DateFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$FormattedRelativeDateTime } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$FormattedRelativeDateTime.d.ts'
import type { RelativeDateTimeFormatter$RelativeDateTimeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeDateTimeUnit.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class RelativeDateTimeFormatter extends Object {
    static getInstance(): RelativeDateTimeFormatter;
    static getInstance(paramlocale: Locale): RelativeDateTimeFormatter;
    static getInstance(paramlocale: Locale, paramnf: NumberFormat): RelativeDateTimeFormatter;
    static getInstance(paramlocale: ULocale): RelativeDateTimeFormatter;
    static getInstance(paramlocale: ULocale, paramnf: NumberFormat): RelativeDateTimeFormatter;
    static getInstance(paramlocale: ULocale, paramnf: NumberFormat, paramstyle: RelativeDateTimeFormatter$Style, paramcapitalizationContext: DisplayContext): RelativeDateTimeFormatter;
    private constructor(qualitativeUnitMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$AbsoluteUnit]: { [key in RelativeDateTimeFormatter$Direction]: string } } }, patternMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$RelativeUnit]: string[][] } }, combinedDateAndTime: string, pluralRules: PluralRules, numberFormat: NumberFormat, style: RelativeDateTimeFormatter$Style, capitalizationContext: DisplayContext, breakIterator: BreakIterator, locale: ULocale)
    // private breakIterator: BreakIterator;
    readonly capitalizationContext: DisplayContext;
    // private combinedDateAndTime: string;
    // private dateFormatSymbols: DateFormatSymbols;
    // private locale: ULocale;
    readonly numberFormat: NumberFormat;
    // private patternMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$RelativeUnit]: string[][] } };
    // private pluralRules: PluralRules;
    // private qualitativeUnitMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$AbsoluteUnit]: { [key in RelativeDateTimeFormatter$Direction]: string } } };
    // private style: RelativeDateTimeFormatter$Style;
    // private styleToDateFormatSymbolsWidth: number[];
    // private adjustForContext(originalFormattedString: string): string;
    // private checkNoAdjustForContext(): void;
    combineDateAndTime(relativeDateString: string, timeString: string): string;
    format(quantity: number, direction: RelativeDateTimeFormatter$Direction, unit: RelativeDateTimeFormatter$RelativeUnit): string;
    format(offset: number, unit: RelativeDateTimeFormatter$RelativeDateTimeUnit): string;
    format(direction: RelativeDateTimeFormatter$Direction, unit: RelativeDateTimeFormatter$AbsoluteUnit): string;
    // private formatAbsoluteImpl(direction: RelativeDateTimeFormatter$Direction, unit: RelativeDateTimeFormatter$AbsoluteUnit): string;
    // private formatImpl(quantity: number, direction: RelativeDateTimeFormatter$Direction, unit: RelativeDateTimeFormatter$RelativeUnit): FormattedStringBuilder;
    formatNumeric(offset: number, unit: RelativeDateTimeFormatter$RelativeDateTimeUnit): string;
    // private formatNumericImpl(offset: number, unit: RelativeDateTimeFormatter$RelativeDateTimeUnit): FormattedStringBuilder;
    formatNumericToValue(offset: number, unit: RelativeDateTimeFormatter$RelativeDateTimeUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    // private formatRelativeImpl(offset: number, unit: RelativeDateTimeFormatter$RelativeDateTimeUnit): CharSequence;
    formatToValue(quantity: number, direction: RelativeDateTimeFormatter$Direction, unit: RelativeDateTimeFormatter$RelativeUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    formatToValue(offset: number, unit: RelativeDateTimeFormatter$RelativeDateTimeUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    formatToValue(direction: RelativeDateTimeFormatter$Direction, unit: RelativeDateTimeFormatter$AbsoluteUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    // private getAbsoluteUnitString(style: RelativeDateTimeFormatter$Style, unit: RelativeDateTimeFormatter$AbsoluteUnit, direction: RelativeDateTimeFormatter$Direction): string;
    getCapitalizationContext(): DisplayContext;
    getFormatStyle(): RelativeDateTimeFormatter$Style;
    getNumberFormat(): NumberFormat;
    // private getRelativeUnitPattern(style: RelativeDateTimeFormatter$Style, unit: RelativeDateTimeFormatter$RelativeUnit, pastFutureIndex: number, pluralForm: StandardPlural): string;
    // private getRelativeUnitPluralPattern(style: RelativeDateTimeFormatter$Style, unit: RelativeDateTimeFormatter$RelativeUnit, pastFutureIndex: number, pluralForm: StandardPlural): string;
}