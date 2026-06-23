import type { GLSLParser } from '../../../../../io/github/douira/glsl_transformer/GLSLParser.d.ts'
import type { GLSLParser$TranslationUnitContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$TranslationUnitContext.d.ts'
import type { EnhancedParser } from '../../../../../io/github/douira/glsl_transformer/parser/EnhancedParser.d.ts'
import type { ParseShape } from '../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class CachingParser extends EnhancedParser {
    constructor()
    constructor(arg0: boolean, arg1: number)
    // private parseCache: { [key: string]: any };
    parse(arg0: string): GLSLParser$TranslationUnitContext;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParseShape<C, Object>): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: (param0: GLSLParser) => C): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, Object>): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: (param0: GLSLParser) => C): C;
    parseWithCache<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, Object>, arg3: { [key: string]: any }): C;
    setParseCacheSizeAndClear(arg0: number): void;
    setTokenFilter(arg0: TokenFilter<Object>): void;
}