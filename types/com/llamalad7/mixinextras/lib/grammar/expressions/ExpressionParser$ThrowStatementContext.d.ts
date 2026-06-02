import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { ExpressionParser$ExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionContext.d.ts'
import type { ExpressionParser$StatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$StatementContext.d.ts'
export class ExpressionParser$ThrowStatementContext extends ExpressionParser$StatementContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ExpressionParser$StatementContext)
    value: ExpressionParser$ExpressionContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
}