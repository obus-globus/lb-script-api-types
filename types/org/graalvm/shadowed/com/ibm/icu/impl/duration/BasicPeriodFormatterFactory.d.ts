import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BasicPeriodFormatterFactory$Customizations } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodFormatterFactory$Customizations.d.ts'
import type { PeriodFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { PeriodFormatterFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatterFactory.d.ts'
import type { PeriodFormatterData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
import type { PeriodFormatterDataService } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
export class BasicPeriodFormatterFactory extends Object implements PeriodFormatterFactory {
    static getDefault(): BasicPeriodFormatterFactory;
    constructor(ds: PeriodFormatterDataService)
    // private customizations: BasicPeriodFormatterFactory$Customizations;
    // private customizationsInUse: boolean;
    // private data: PeriodFormatterData;
    // private ds: PeriodFormatterDataService;
    // private localeName: string;
    getCountVariant(): number;
    getData(): PeriodFormatterData;
    getData(locName: string): PeriodFormatterData;
    getDisplayLimit(): boolean;
    getDisplayPastFuture(): boolean;
    getFormatter(): PeriodFormatter;
    getSeparatorVariant(): number;
    getUnitVariant(): number;
    setCountVariant(variant: number): PeriodFormatterFactory;
    setDisplayLimit(display: boolean): PeriodFormatterFactory;
    setDisplayPastFuture(display: boolean): PeriodFormatterFactory;
    setLocale(localeName: string): PeriodFormatterFactory;
    setSeparatorVariant(variant: number): PeriodFormatterFactory;
    setUnitVariant(variant: number): PeriodFormatterFactory;
    // private updateCustomizations(): BasicPeriodFormatterFactory$Customizations;
}