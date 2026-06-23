import type { ICUCurrencyMetaInfo$Collector } from '../../../../com/ibm/icu/impl/ICUCurrencyMetaInfo$Collector.d.ts'
import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { CurrencyMetaInfo } from '../../../../com/ibm/icu/text/CurrencyMetaInfo.d.ts'
import type { CurrencyMetaInfo$CurrencyDigits } from '../../../../com/ibm/icu/text/CurrencyMetaInfo$CurrencyDigits.d.ts'
import type { CurrencyMetaInfo$CurrencyFilter } from '../../../../com/ibm/icu/text/CurrencyMetaInfo$CurrencyFilter.d.ts'
import type { CurrencyMetaInfo$CurrencyInfo } from '../../../../com/ibm/icu/text/CurrencyMetaInfo$CurrencyInfo.d.ts'
import type { Currency$CurrencyUsage } from '../../../../com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUCurrencyMetaInfo extends CurrencyMetaInfo {
    static getInstance(): CurrencyMetaInfo;
    static getInstance(paramarg0: boolean): CurrencyMetaInfo;
    static hasData(): boolean;
    constructor()
    // private digitInfo: ICUResourceBundle;
    // private regionInfo: ICUResourceBundle;
    // private collect<T extends unknown>(arg0: ICUCurrencyMetaInfo$Collector<T>, arg1: CurrencyMetaInfo$CurrencyFilter): T[];
    // private collectRegion<T extends unknown>(arg0: ICUCurrencyMetaInfo$Collector<T>, arg1: CurrencyMetaInfo$CurrencyFilter, arg2: number, arg3: ICUResourceBundle): void;
    currencies(arg0: CurrencyMetaInfo$CurrencyFilter): string[];
    currencyDigits(arg0: string): CurrencyMetaInfo$CurrencyDigits;
    currencyDigits(arg0: string, arg1: Currency$CurrencyUsage): CurrencyMetaInfo$CurrencyDigits;
    currencyInfo(arg0: CurrencyMetaInfo$CurrencyFilter): CurrencyMetaInfo$CurrencyInfo[];
    // private getDate(arg0: ICUResourceBundle, arg1: number, arg2: boolean): number;
    regions(arg0: CurrencyMetaInfo$CurrencyFilter): string[];
}