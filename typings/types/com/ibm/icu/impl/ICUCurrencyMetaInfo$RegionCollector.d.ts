import type { ICUCurrencyMetaInfo$Collector } from '../../../../com/ibm/icu/impl/ICUCurrencyMetaInfo$Collector.d.ts'
import type { ICUCurrencyMetaInfo$UniqueList } from '../../../../com/ibm/icu/impl/ICUCurrencyMetaInfo$UniqueList.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUCurrencyMetaInfo$RegionCollector extends Object implements ICUCurrencyMetaInfo$Collector<string> {
    private constructor()
    // private result: ICUCurrencyMetaInfo$UniqueList<string>;
    collect(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
    collects(): number;
    getList(): string[];
}