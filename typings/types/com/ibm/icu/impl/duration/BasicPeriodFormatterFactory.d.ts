import type { BasicPeriodFormatterFactory$Customizations } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodFormatterFactory$Customizations.d.ts'
import type { PeriodFormatter } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { PeriodFormatterFactory } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatterFactory.d.ts'
import type { PeriodFormatterData } from '../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
import type { PeriodFormatterDataService } from '../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicPeriodFormatterFactory extends Object implements PeriodFormatterFactory {
    static getDefault(): BasicPeriodFormatterFactory;
    constructor(arg0: PeriodFormatterDataService)
    // private customizations: BasicPeriodFormatterFactory$Customizations;
    // private customizationsInUse: boolean;
    // private data: PeriodFormatterData;
    // private ds: PeriodFormatterDataService;
    // private localeName: string;
    getCountVariant(): number;
    getData(): PeriodFormatterData;
    getData(arg0: string): PeriodFormatterData;
    getDisplayLimit(): boolean;
    getDisplayPastFuture(): boolean;
    getFormatter(): PeriodFormatter;
    getSeparatorVariant(): number;
    getUnitVariant(): number;
    setCountVariant(arg0: number): PeriodFormatterFactory;
    setDisplayLimit(arg0: boolean): PeriodFormatterFactory;
    setDisplayPastFuture(arg0: boolean): PeriodFormatterFactory;
    setLocale(arg0: string): PeriodFormatterFactory;
    setSeparatorVariant(arg0: number): PeriodFormatterFactory;
    setUnitVariant(arg0: number): PeriodFormatterFactory;
    // private updateCustomizations(): BasicPeriodFormatterFactory$Customizations;
}