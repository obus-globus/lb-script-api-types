import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IntStream } from '../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Recognizer } from '../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { IntervalSet } from '../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class RecognitionException extends RuntimeException {
    constructor(arg0: string, arg1: Recognizer<Object, Object>, arg2: IntStream, arg3: ParserRuleContext)
    constructor(arg0: Recognizer<Object, Object>, arg1: IntStream, arg2: ParserRuleContext)
    readonly ctx: RuleContext;
    // private input: IntStream;
    readonly offendingState: number;
    readonly offendingToken: Token;
    readonly recognizer: Recognizer<Object, Object>;
    getCtx(): RuleContext;
    getExpectedTokens(): IntervalSet;
    getInputStream(): IntStream;
    getOffendingState(): number;
    getOffendingToken(): Token;
    getRecognizer(): Recognizer<Object, Object>;
    setOffendingState(arg0: number): void;
    setOffendingToken(arg0: Token): void;
}