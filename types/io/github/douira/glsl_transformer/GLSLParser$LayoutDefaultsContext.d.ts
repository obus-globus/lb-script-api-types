import type { GLSLParser$LayoutQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$LayoutQualifierContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$LayoutDefaultsContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    layoutMode: Token;
    BUFFER(): TerminalNode;
    IN(): TerminalNode;
    OUT(): TerminalNode;
    SEMICOLON(): TerminalNode;
    UNIFORM(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
    layoutQualifier(): GLSLParser$LayoutQualifierContext;
}