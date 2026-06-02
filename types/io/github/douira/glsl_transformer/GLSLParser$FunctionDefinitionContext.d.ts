import type { GLSLParser$CompoundStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$CompoundStatementContext.d.ts'
import type { GLSLParser$FunctionPrototypeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FunctionPrototypeContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
export class GLSLParser$FunctionDefinitionContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    compoundStatement(): GLSLParser$CompoundStatementContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    functionPrototype(): GLSLParser$FunctionPrototypeContext;
    getRuleIndex(): number;
}