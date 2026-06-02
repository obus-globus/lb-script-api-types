import type { GLSLParser$AttributeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$AttributeContext.d.ts'
import type { GLSLParser$FullySpecifiedTypeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FullySpecifiedTypeContext.d.ts'
import type { GLSLParser$FunctionParameterListContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FunctionParameterListContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$FunctionPrototypeContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    IDENTIFIER(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    attribute(): GLSLParser$AttributeContext[];
    attribute(arg0: number): GLSLParser$AttributeContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    fullySpecifiedType(): GLSLParser$FullySpecifiedTypeContext;
    functionParameterList(): GLSLParser$FunctionParameterListContext;
    getRuleIndex(): number;
}