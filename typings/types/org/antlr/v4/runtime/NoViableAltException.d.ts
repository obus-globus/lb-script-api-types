import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenStream } from '../../../../org/antlr/v4/runtime/TokenStream.d.ts'
export class NoViableAltException extends RecognitionException {
    constructor(arg0: Parser)
    constructor(arg0: Parser, arg1: TokenStream, arg2: Token, arg3: Token, arg4: (Object | null)[], arg5: ParserRuleContext)
    readonly deadEndConfigs: (Object | null)[];
    readonly startToken: Token;
    getDeadEndConfigs(): (Object | null)[];
    getStartToken(): Token;
}