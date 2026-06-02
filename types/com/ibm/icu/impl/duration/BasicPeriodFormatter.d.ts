import type { BasicPeriodFormatterFactory } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodFormatterFactory.d.ts'
import type { BasicPeriodFormatterFactory$Customizations } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodFormatterFactory$Customizations.d.ts'
import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodFormatter } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { PeriodFormatterData } from '../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicPeriodFormatter extends Object implements PeriodFormatter {
    constructor(arg0: BasicPeriodFormatterFactory, arg1: string, arg2: PeriodFormatterData, arg3: BasicPeriodFormatterFactory$Customizations)
    // private customs: BasicPeriodFormatterFactory$Customizations;
    // private data: PeriodFormatterData;
    // private factory: BasicPeriodFormatterFactory;
    // private localeName: string;
    format(arg0: Period): string;
    // private format(arg0: number, arg1: boolean, arg2: number[]): string;
    withLocale(arg0: string): PeriodFormatter;
}