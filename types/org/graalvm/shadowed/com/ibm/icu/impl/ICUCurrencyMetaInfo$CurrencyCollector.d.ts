import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUCurrencyMetaInfo$Collector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyMetaInfo$Collector.d.ts'
import type { ICUCurrencyMetaInfo$UniqueList } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyMetaInfo$UniqueList.d.ts'
export class ICUCurrencyMetaInfo$CurrencyCollector extends Object implements ICUCurrencyMetaInfo$Collector<string> {
    private constructor()
    // private result: ICUCurrencyMetaInfo$UniqueList<string>;
    collect(region: string, currency: string, from: number, to: number, priority: number, tender: boolean): void;
    collects(): number;
    getList(): string[];
}