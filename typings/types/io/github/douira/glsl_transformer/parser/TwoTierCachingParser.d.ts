import type { CachingParser } from '../../../../../io/github/douira/glsl_transformer/parser/CachingParser.d.ts'
import type { CachingParser$CacheContents } from '../../../../../io/github/douira/glsl_transformer/parser/CachingParser$CacheContents.d.ts'
import type { ParseShape } from '../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class TwoTierCachingParser extends CachingParser {
    constructor()
    constructor(arg0: boolean, arg1: number, arg2: number)
    // private secondaryCache: TypedTreeCache<CachingParser$CacheContents>;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, Object>): C;
    setParseCacheSizeAndClear(arg0: number): void;
    setTokenFilter(arg0: TokenFilter<Object>): void;
    setTwoTierCacheSizesAndClear(arg0: number, arg1: number): void;
}