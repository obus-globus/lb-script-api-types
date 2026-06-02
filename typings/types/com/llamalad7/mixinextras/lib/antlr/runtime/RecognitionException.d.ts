import type { IntStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/IntStream.d.ts'
import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { Recognizer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { IntervalSet } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecognitionException extends RuntimeException {
    constructor(arg0: Recognizer<Object, Object>, arg1: IntStream, arg2: ParserRuleContext)
    constructor(arg0: string, arg1: Recognizer<Object, Object>, arg2: IntStream, arg3: ParserRuleContext)
    // private ctx: RuleContext;
    // private input: IntStream;
    // private offendingState: number;
    readonly offendingToken: Token;
    // private recognizer: Recognizer<Object, Object>;
    getExpectedTokens(): IntervalSet;
    getInputStream(): IntStream;
    getOffendingToken(): Token;
    setOffendingState(arg0: number): void;
    setOffendingToken(arg0: Token): void;
}