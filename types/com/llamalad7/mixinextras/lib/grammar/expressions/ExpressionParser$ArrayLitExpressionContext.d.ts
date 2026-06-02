import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { ExpressionParser$ExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionContext.d.ts'
import type { ExpressionParser$NameWithDimsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NameWithDimsContext.d.ts'
import type { ExpressionParser$NonEmptyArgumentsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NonEmptyArgumentsContext.d.ts'
export class ExpressionParser$ArrayLitExpressionContext extends ExpressionParser$ExpressionContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ExpressionParser$ExpressionContext)
    elementType: ExpressionParser$NameWithDimsContext;
    values: ExpressionParser$NonEmptyArgumentsContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
}