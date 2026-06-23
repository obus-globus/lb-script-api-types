import type { GLSLParser$LayoutQualifierIdContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$LayoutQualifierIdContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$LayoutQualifierContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    layoutQualifiers: GLSLParser$LayoutQualifierIdContext[];
    COMMA(): TerminalNode[];
    COMMA(arg0: number): TerminalNode;
    LAYOUT(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    accept<T extends unknown>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
    layoutQualifierId(): GLSLParser$LayoutQualifierIdContext[];
    layoutQualifierId(arg0: number): GLSLParser$LayoutQualifierIdContext;
}