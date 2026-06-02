import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CurrencyMetaInfo$CurrencyDigits } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo$CurrencyDigits.d.ts'
import type { CurrencyMetaInfo$CurrencyFilter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo$CurrencyFilter.d.ts'
import type { CurrencyMetaInfo$CurrencyInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo$CurrencyInfo.d.ts'
import type { Currency$CurrencyUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyUsage.d.ts'
export class CurrencyMetaInfo extends Object {
    static getInstance(): CurrencyMetaInfo;
    static getInstance(paramnoSubstitute: boolean): CurrencyMetaInfo;
    static hasData(): boolean;
    constructor()
    currencies(filter: CurrencyMetaInfo$CurrencyFilter): string[];
    currencyDigits(isoCode: string): CurrencyMetaInfo$CurrencyDigits;
    currencyDigits(isoCode: string, currencyUsage: Currency$CurrencyUsage): CurrencyMetaInfo$CurrencyDigits;
    currencyInfo(filter: CurrencyMetaInfo$CurrencyFilter): CurrencyMetaInfo$CurrencyInfo[];
    regions(filter: CurrencyMetaInfo$CurrencyFilter): string[];
}