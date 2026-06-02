import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ANTLRErrorStrategy } from '../../../../org/antlr/v4/runtime/ANTLRErrorStrategy.d.ts'
import type { FailedPredicateException } from '../../../../org/antlr/v4/runtime/FailedPredicateException.d.ts'
import type { InputMismatchException } from '../../../../org/antlr/v4/runtime/InputMismatchException.d.ts'
import type { NoViableAltException } from '../../../../org/antlr/v4/runtime/NoViableAltException.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { IntervalSet } from '../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class DefaultErrorStrategy extends Object implements ANTLRErrorStrategy {
    constructor()
    // private errorRecoveryMode: boolean;
    // private lastErrorIndex: number;
    // private lastErrorStates: IntervalSet;
    // private nextTokensContext: ParserRuleContext;
    // private nextTokensState: number;
    beginErrorCondition(arg0: Parser): void;
    consumeUntil(arg0: Parser, arg1: IntervalSet): void;
    endErrorCondition(arg0: Parser): void;
    escapeWSAndQuote(arg0: string): string;
    getErrorRecoverySet(arg0: Parser): IntervalSet;
    getExpectedTokens(arg0: Parser): IntervalSet;
    getMissingSymbol(arg0: Parser): Token;
    getSymbolText(arg0: Token): string;
    getSymbolType(arg0: Token): number;
    getTokenErrorDisplay(arg0: Token): string;
    inErrorRecoveryMode(arg0: Parser): boolean;
    recover(arg0: Parser, arg1: RecognitionException): void;
    recoverInline(arg0: Parser): Token;
    reportError(arg0: Parser, arg1: RecognitionException): void;
    reportFailedPredicate(arg0: Parser, arg1: FailedPredicateException): void;
    reportInputMismatch(arg0: Parser, arg1: InputMismatchException): void;
    reportMatch(arg0: Parser): void;
    reportMissingToken(arg0: Parser): void;
    reportNoViableAlternative(arg0: Parser, arg1: NoViableAltException): void;
    reportUnwantedToken(arg0: Parser): void;
    reset(arg0: Parser): void;
    singleTokenDeletion(arg0: Parser): Token;
    singleTokenInsertion(arg0: Parser): boolean;
    sync(arg0: Parser): void;
}