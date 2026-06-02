import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { Currency$CurrencyStringInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyStringInfo.d.ts'
export class Currency$CurrencyNameResultHandler extends Object implements TextTrieMap$ResultHandler<Currency$CurrencyStringInfo> {
    private constructor()
    readonly bestCurrencyISOCode: string;
    readonly bestMatchLength: number;
    getBestCurrencyISOCode(): string;
    getBestMatchLength(): number;
    handlePrefixMatch(matchLength: number, values: Iterator<Currency$CurrencyStringInfo>): boolean;
}