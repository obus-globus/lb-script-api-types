import type { CachingParser$CacheContents } from '../../../../../io/github/douira/glsl_transformer/parser/CachingParser$CacheContents.d.ts'
import type { EnhancedParser } from '../../../../../io/github/douira/glsl_transformer/parser/EnhancedParser.d.ts'
import type { ParseShape } from '../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class CachingParser extends EnhancedParser {
    constructor()
    constructor(arg0: boolean, arg1: number)
    // private parseCache: TypedTreeCache<CachingParser$CacheContents>;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParseShape<C, Object>): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, Object>): C;
    parseWithCache<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, Object>, arg3: TypedTreeCache<CachingParser$CacheContents>): C;
    setParseCacheSizeAndClear(arg0: number): void;
    setTokenFilter(arg0: TokenFilter<Object>): void;
}