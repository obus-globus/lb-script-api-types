import type { CachingParser } from '../../../../../io/github/douira/glsl_transformer/parser/CachingParser.d.ts'
import type { ParseShape } from '../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class TranslationUnitFilterCachingParser extends CachingParser {
    constructor()
    constructor(arg0: boolean, arg1: number)
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, Object>): C;
}