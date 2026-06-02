import type { Parser } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NoViableAltException extends RecognitionException {
    constructor(arg0: Parser)
    constructor(arg0: Parser, arg1: TokenStream, arg2: Token, arg3: Token, arg4: (Object | null)[], arg5: ParserRuleContext)
    // private deadEndConfigs: (Object | null)[];
    readonly startToken: Token;
    getStartToken(): Token;
}