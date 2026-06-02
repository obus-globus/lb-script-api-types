import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BasicPeriodFormatterFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodFormatterFactory.d.ts'
import type { BasicPeriodFormatterFactory$Customizations } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodFormatterFactory$Customizations.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { PeriodFormatterData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
export class BasicPeriodFormatter extends Object implements PeriodFormatter {
    constructor(factory: BasicPeriodFormatterFactory, localeName: string, data: PeriodFormatterData, customs: BasicPeriodFormatterFactory$Customizations)
    // private customs: BasicPeriodFormatterFactory$Customizations;
    // private data: PeriodFormatterData;
    // private factory: BasicPeriodFormatterFactory;
    // private localeName: string;
    // private format(tl: number, inFuture: boolean, counts: number[]): string;
    format(period: Period): string;
    withLocale(locName: string): PeriodFormatter;
}