import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
export class InputMismatchException extends RecognitionException {
    constructor(arg0: Parser)
    constructor(arg0: Parser, arg1: number, arg2: ParserRuleContext)
}