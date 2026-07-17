import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { StandardPlural } from '../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { DateFormatSymbols } from '../../../../com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$FormattedRelativeDateTime } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$FormattedRelativeDateTime.d.ts'
import type { RelativeDateTimeFormatter$RelativeDateTimeUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$RelativeDateTimeUnit.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class RelativeDateTimeFormatter extends Object {
    static getInstance(): RelativeDateTimeFormatter;
    static getInstance(paramarg0: ULocale): RelativeDateTimeFormatter;
    static getInstance(paramarg0: ULocale, paramarg1: NumberFormat): RelativeDateTimeFormatter;
    static getInstance(paramarg0: ULocale, paramarg1: NumberFormat, paramarg2: RelativeDateTimeFormatter$Style, paramarg3: DisplayContext): RelativeDateTimeFormatter;
    static getInstance(paramarg0: Locale): RelativeDateTimeFormatter;
    static getInstance(paramarg0: Locale, paramarg1: NumberFormat): RelativeDateTimeFormatter;
    private constructor(arg0: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$AbsoluteUnit, JavaMap<RelativeDateTimeFormatter$Direction, string>>>, arg1: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$RelativeUnit, string[][]>>, arg2: string, arg3: PluralRules, arg4: NumberFormat, arg5: RelativeDateTimeFormatter$Style, arg6: DisplayContext, arg7: BreakIterator, arg8: ULocale)
    // private breakIterator: BreakIterator;
    readonly capitalizationContext: DisplayContext;
    // private combinedDateAndTime: string;
    // private dateFormatSymbols: DateFormatSymbols;
    // private locale: ULocale;
    readonly numberFormat: NumberFormat;
    // private patternMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$RelativeUnit, string[][]>>;
    // private pluralRules: PluralRules;
    // private qualitativeUnitMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$AbsoluteUnit, JavaMap<RelativeDateTimeFormatter$Direction, string>>>;
    // private style: RelativeDateTimeFormatter$Style;
    // private styleToDateFormatSymbolsWidth: number[];
    // private adjustForContext(arg0: string): string;
    // private checkNoAdjustForContext(): void;
    combineDateAndTime(arg0: string, arg1: string): string;
    format(arg0: RelativeDateTimeFormatter$Direction, arg1: RelativeDateTimeFormatter$AbsoluteUnit): string;
    format(arg0: number, arg1: RelativeDateTimeFormatter$Direction, arg2: RelativeDateTimeFormatter$RelativeUnit): string;
    format(arg0: number, arg1: RelativeDateTimeFormatter$RelativeDateTimeUnit): string;
    // private formatAbsoluteImpl(arg0: RelativeDateTimeFormatter$Direction, arg1: RelativeDateTimeFormatter$AbsoluteUnit): string;
    // private formatImpl(arg0: number, arg1: RelativeDateTimeFormatter$Direction, arg2: RelativeDateTimeFormatter$RelativeUnit): FormattedStringBuilder;
    formatNumeric(arg0: number, arg1: RelativeDateTimeFormatter$RelativeDateTimeUnit): string;
    // private formatNumericImpl(arg0: number, arg1: RelativeDateTimeFormatter$RelativeDateTimeUnit): FormattedStringBuilder;
    formatNumericToValue(arg0: number, arg1: RelativeDateTimeFormatter$RelativeDateTimeUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    // private formatRelativeImpl(arg0: number, arg1: RelativeDateTimeFormatter$RelativeDateTimeUnit): CharSequence;
    formatToValue(arg0: RelativeDateTimeFormatter$Direction, arg1: RelativeDateTimeFormatter$AbsoluteUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    formatToValue(arg0: number, arg1: RelativeDateTimeFormatter$Direction, arg2: RelativeDateTimeFormatter$RelativeUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    formatToValue(arg0: number, arg1: RelativeDateTimeFormatter$RelativeDateTimeUnit): RelativeDateTimeFormatter$FormattedRelativeDateTime;
    // private getAbsoluteUnitString(arg0: RelativeDateTimeFormatter$Style, arg1: RelativeDateTimeFormatter$AbsoluteUnit, arg2: RelativeDateTimeFormatter$Direction): string;
    getCapitalizationContext(): DisplayContext;
    getFormatStyle(): RelativeDateTimeFormatter$Style;
    getNumberFormat(): NumberFormat;
    // private getRelativeUnitPattern(arg0: RelativeDateTimeFormatter$Style, arg1: RelativeDateTimeFormatter$RelativeUnit, arg2: number, arg3: StandardPlural): string;
    // private getRelativeUnitPluralPattern(arg0: RelativeDateTimeFormatter$Style, arg1: RelativeDateTimeFormatter$RelativeUnit, arg2: number, arg3: StandardPlural): string;
}