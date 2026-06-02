import type { GLSLParser$CaseLabelContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$CaseLabelContext.d.ts'
import type { GLSLParser$CompoundStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$CompoundStatementContext.d.ts'
import type { GLSLParser$DeclarationStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DeclarationStatementContext.d.ts'
import type { GLSLParser$DemoteStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DemoteStatementContext.d.ts'
import type { GLSLParser$DoWhileStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DoWhileStatementContext.d.ts'
import type { GLSLParser$EmptyStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$EmptyStatementContext.d.ts'
import type { GLSLParser$ExpressionStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ExpressionStatementContext.d.ts'
import type { GLSLParser$ForStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ForStatementContext.d.ts'
import type { GLSLParser$JumpStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$JumpStatementContext.d.ts'
import type { GLSLParser$SelectionStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$SelectionStatementContext.d.ts'
import type { GLSLParser$SwitchStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$SwitchStatementContext.d.ts'
import type { GLSLParser$WhileStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$WhileStatementContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
export class GLSLParser$StatementContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    caseLabel(): GLSLParser$CaseLabelContext;
    compoundStatement(): GLSLParser$CompoundStatementContext;
    declarationStatement(): GLSLParser$DeclarationStatementContext;
    demoteStatement(): GLSLParser$DemoteStatementContext;
    doWhileStatement(): GLSLParser$DoWhileStatementContext;
    emptyStatement(): GLSLParser$EmptyStatementContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    expressionStatement(): GLSLParser$ExpressionStatementContext;
    forStatement(): GLSLParser$ForStatementContext;
    getRuleIndex(): number;
    jumpStatement(): GLSLParser$JumpStatementContext;
    selectionStatement(): GLSLParser$SelectionStatementContext;
    switchStatement(): GLSLParser$SwitchStatementContext;
    whileStatement(): GLSLParser$WhileStatementContext;
}