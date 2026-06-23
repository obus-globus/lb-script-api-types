import type { GLSLParser$AttributeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$AttributeContext.d.ts'
import type { GLSLParser$DeclarationStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DeclarationStatementContext.d.ts'
import type { GLSLParser$EmptyStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$EmptyStatementContext.d.ts'
import type { GLSLParser$ExpressionContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ExpressionContext.d.ts'
import type { GLSLParser$ExpressionStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ExpressionStatementContext.d.ts'
import type { GLSLParser$IterationConditionContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$IterationConditionContext.d.ts'
import type { GLSLParser$StatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$StatementContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$ForStatementContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    condition: GLSLParser$ExpressionContext;
    incrementer: GLSLParser$ExpressionContext;
    initCondition: GLSLParser$IterationConditionContext;
    loopBody: GLSLParser$StatementContext;
    FOR(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    SEMICOLON(): TerminalNode;
    accept<T extends unknown>(arg0: ParseTreeVisitor<T>): T;
    attribute(): GLSLParser$AttributeContext;
    declarationStatement(): GLSLParser$DeclarationStatementContext;
    emptyStatement(): GLSLParser$EmptyStatementContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    expression(): GLSLParser$ExpressionContext[];
    expression(arg0: number): GLSLParser$ExpressionContext;
    expressionStatement(): GLSLParser$ExpressionStatementContext;
    getRuleIndex(): number;
    iterationCondition(): GLSLParser$IterationConditionContext;
    statement(): GLSLParser$StatementContext;
}