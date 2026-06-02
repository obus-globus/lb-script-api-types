import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { ExpressionParser$ExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionContext.d.ts'
import type { ExpressionParser$NameWithDimsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NameWithDimsContext.d.ts'
export class ExpressionParser$CastExpressionContext extends ExpressionParser$ExpressionContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ExpressionParser$ExpressionContext)
    expr: ExpressionParser$ExpressionContext;
    type: ExpressionParser$NameWithDimsContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
}