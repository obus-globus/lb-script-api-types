import type { GLSLParser$FullySpecifiedTypeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FullySpecifiedTypeContext.d.ts'
import type { GLSLParser$StructDeclaratorContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$StructDeclaratorContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$StructMemberContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    structDeclarator: GLSLParser$StructDeclaratorContext;
    structDeclarators: GLSLParser$StructDeclaratorContext[];
    COMMA(): TerminalNode[];
    COMMA(arg0: number): TerminalNode;
    SEMICOLON(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    fullySpecifiedType(): GLSLParser$FullySpecifiedTypeContext;
    getRuleIndex(): number;
    structDeclarator(): GLSLParser$StructDeclaratorContext[];
    structDeclarator(arg0: number): GLSLParser$StructDeclaratorContext;
}