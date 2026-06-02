import type { Parser } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser.d.ts'
import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ANTLRErrorStrategy extends Object{
    inErrorRecoveryMode(arg0: Parser): boolean;
    recover(arg0: Parser, arg1: RecognitionException): void;
    recoverInline(arg0: Parser): Token;
    reportError(arg0: Parser, arg1: RecognitionException): void;
    reportMatch(arg0: Parser): void;
    reset(arg0: Parser): void;
    sync(arg0: Parser): void;
}