import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GLSLParser } from '../../../../../io/github/douira/glsl_transformer/GLSLParser.d.ts'
import type { GLSLParser$TranslationUnitContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$TranslationUnitContext.d.ts'
import type { CachingParser } from '../../../../../io/github/douira/glsl_transformer/parser/CachingParser.d.ts'
import type { ParseShape } from '../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class TwoTierCachingParser extends CachingParser {
    constructor()
    constructor(arg0: boolean, arg1: number, arg2: number)
    // private secondaryCache: JavaMap<any, any>;
    parse(arg0: string): GLSLParser$TranslationUnitContext;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParseShape<C, any>): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: (param0: GLSLParser) => C): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, any>): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: (param0: GLSLParser) => C): C;
    setParseCacheSizeAndClear(arg0: number): void;
    setTokenFilter(arg0: TokenFilter<any>): void;
    setTwoTierCacheSizesAndClear(arg0: number, arg1: number): void;
}