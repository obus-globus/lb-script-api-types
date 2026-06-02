import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUCurrencyMetaInfo$Collector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyMetaInfo$Collector.d.ts'
import type { CurrencyMetaInfo$CurrencyInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyMetaInfo$CurrencyInfo.d.ts'
export class ICUCurrencyMetaInfo$InfoCollector extends Object implements ICUCurrencyMetaInfo$Collector<CurrencyMetaInfo$CurrencyInfo> {
    private constructor()
    // private result: CurrencyMetaInfo$CurrencyInfo[];
    collect(region: string, currency: string, from: number, to: number, priority: number, tender: boolean): void;
    collects(): number;
    getList(): CurrencyMetaInfo$CurrencyInfo[];
}