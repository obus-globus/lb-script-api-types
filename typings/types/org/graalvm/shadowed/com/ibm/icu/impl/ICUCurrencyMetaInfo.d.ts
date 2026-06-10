import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUCurrencyMetaInfo$Collector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyMetaInfo$Collector.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { CurrencyMetaInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo.d.ts'
import type { CurrencyMetaInfo$CurrencyDigits } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo$CurrencyDigits.d.ts'
import type { CurrencyMetaInfo$CurrencyFilter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo$CurrencyFilter.d.ts'
import type { CurrencyMetaInfo$CurrencyInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo$CurrencyInfo.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
export class ICUCurrencyMetaInfo extends CurrencyMetaInfo {
    static getInstance(): CurrencyMetaInfo;
    static getInstance(paramnoSubstitute: boolean): CurrencyMetaInfo;
    static hasData(): boolean;
    constructor()
    // private digitInfo: ICUResourceBundle;
    // private regionInfo: ICUResourceBundle;
    // private collect<T extends Object | number | string | boolean>(collector: ICUCurrencyMetaInfo$Collector<T>, filter: CurrencyMetaInfo$CurrencyFilter): T[];
    // private collectRegion<T extends Object | number | string | boolean>(collector: ICUCurrencyMetaInfo$Collector<T>, filter: CurrencyMetaInfo$CurrencyFilter, needed: number, b: ICUResourceBundle): void;
    currencies(filter: CurrencyMetaInfo$CurrencyFilter): string[];
    currencyDigits(isoCode: string): CurrencyMetaInfo$CurrencyDigits;
    currencyDigits(isoCode: string, currencyPurpose: Currency$CurrencyUsage): CurrencyMetaInfo$CurrencyDigits;
    currencyInfo(filter: CurrencyMetaInfo$CurrencyFilter): CurrencyMetaInfo$CurrencyInfo[];
    // private getDate(b: ICUResourceBundle, defaultValue: number, endOfDay: boolean): number;
    regions(filter: CurrencyMetaInfo$CurrencyFilter): string[];
}