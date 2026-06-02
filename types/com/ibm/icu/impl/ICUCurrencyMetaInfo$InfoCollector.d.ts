import type { ICUCurrencyMetaInfo$Collector } from '../../../../com/ibm/icu/impl/ICUCurrencyMetaInfo$Collector.d.ts'
import type { CurrencyMetaInfo$CurrencyInfo } from '../../../../com/ibm/icu/text/CurrencyMetaInfo$CurrencyInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUCurrencyMetaInfo$InfoCollector extends Object implements ICUCurrencyMetaInfo$Collector<CurrencyMetaInfo$CurrencyInfo> {
    private constructor()
    // private result: CurrencyMetaInfo$CurrencyInfo[];
    collect(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
    collects(): number;
    getList(): CurrencyMetaInfo$CurrencyInfo[];
}