import type { GLSLParser$ParameterDeclarationContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ParameterDeclarationContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$FunctionParameterListContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    parameters: GLSLParser$ParameterDeclarationContext[];
    COMMA(): TerminalNode[];
    COMMA(arg0: number): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
    parameterDeclaration(): GLSLParser$ParameterDeclarationContext[];
    parameterDeclaration(arg0: number): GLSLParser$ParameterDeclarationContext;
}