import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { ExpressionParser$ExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionContext.d.ts'
export class ExpressionParser$NonEmptyArgumentsContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    expression(): ExpressionParser$ExpressionContext[];
    getRuleIndex(): number;
}