import type { Parser } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
export class InputMismatchException extends RecognitionException {
    constructor(arg0: Parser)
    constructor(arg0: Parser, arg1: number, arg2: ParserRuleContext)
}