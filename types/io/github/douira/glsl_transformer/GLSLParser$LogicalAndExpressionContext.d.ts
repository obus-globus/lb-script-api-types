import type { GLSLParser$FiniteExpressionContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FiniteExpressionContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$LogicalAndExpressionContext extends GLSLParser$FiniteExpressionContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: GLSLParser$FiniteExpressionContext)
    left: GLSLParser$FiniteExpressionContext;
    op: Token;
    right: GLSLParser$FiniteExpressionContext;
    LOGICAL_AND_OP(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    finiteExpression(): GLSLParser$FiniteExpressionContext[];
    finiteExpression(arg0: number): GLSLParser$FiniteExpressionContext;
}