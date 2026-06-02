import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
export interface ANTLRErrorStrategy extends Object{
    inErrorRecoveryMode(arg0: Parser): boolean;
    recover(arg0: Parser, arg1: RecognitionException): void;
    recoverInline(arg0: Parser): Token;
    reportError(arg0: Parser, arg1: RecognitionException): void;
    reportMatch(arg0: Parser): void;
    reset(arg0: Parser): void;
    sync(arg0: Parser): void;
}