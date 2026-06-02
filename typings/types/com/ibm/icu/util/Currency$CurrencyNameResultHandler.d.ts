import type { TextTrieMap$ResultHandler } from '../../../../com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { Currency$CurrencyStringInfo } from '../../../../com/ibm/icu/util/Currency$CurrencyStringInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Currency$CurrencyNameResultHandler extends Object implements TextTrieMap$ResultHandler<Currency$CurrencyStringInfo> {
    private constructor()
    readonly bestCurrencyISOCode: string;
    readonly bestMatchLength: number;
    getBestCurrencyISOCode(): string;
    getBestMatchLength(): number;
    handlePrefixMatch(arg0: number, arg1: Iterator<Currency$CurrencyStringInfo>): boolean;
}