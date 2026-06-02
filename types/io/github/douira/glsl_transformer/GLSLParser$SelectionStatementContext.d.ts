import type { GLSLParser$AttributeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$AttributeContext.d.ts'
import type { GLSLParser$ExpressionContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ExpressionContext.d.ts'
import type { GLSLParser$StatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$StatementContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$SelectionStatementContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    condition: GLSLParser$ExpressionContext;
    ifFalse: GLSLParser$StatementContext;
    ifTrue: GLSLParser$StatementContext;
    ELSE(): TerminalNode;
    IF(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    attribute(): GLSLParser$AttributeContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    expression(): GLSLParser$ExpressionContext;
    getRuleIndex(): number;
    statement(): GLSLParser$StatementContext[];
    statement(arg0: number): GLSLParser$StatementContext;
}