import type { CurrencyMetaInfo$CurrencyDigits } from '../../../../com/ibm/icu/text/CurrencyMetaInfo$CurrencyDigits.d.ts'
import type { CurrencyMetaInfo$CurrencyFilter } from '../../../../com/ibm/icu/text/CurrencyMetaInfo$CurrencyFilter.d.ts'
import type { CurrencyMetaInfo$CurrencyInfo } from '../../../../com/ibm/icu/text/CurrencyMetaInfo$CurrencyInfo.d.ts'
import type { Currency$CurrencyUsage } from '../../../../com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CurrencyMetaInfo extends Object {
    static getInstance(): CurrencyMetaInfo;
    static getInstance(paramarg0: boolean): CurrencyMetaInfo;
    static hasData(): boolean;
    constructor()
    currencies(arg0: CurrencyMetaInfo$CurrencyFilter): string[];
    currencyDigits(arg0: string): CurrencyMetaInfo$CurrencyDigits;
    currencyDigits(arg0: string, arg1: Currency$CurrencyUsage): CurrencyMetaInfo$CurrencyDigits;
    currencyInfo(arg0: CurrencyMetaInfo$CurrencyFilter): CurrencyMetaInfo$CurrencyInfo[];
    regions(arg0: CurrencyMetaInfo$CurrencyFilter): string[];
}