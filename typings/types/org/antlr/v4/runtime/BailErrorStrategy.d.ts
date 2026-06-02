import type { DefaultErrorStrategy } from '../../../../org/antlr/v4/runtime/DefaultErrorStrategy.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
export class BailErrorStrategy extends DefaultErrorStrategy {
    constructor()
    recover(arg0: Parser, arg1: RecognitionException): void;
    recoverInline(arg0: Parser): Token;
    sync(arg0: Parser): void;
}