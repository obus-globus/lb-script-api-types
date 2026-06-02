import type { GLSLParser$ArraySpecifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ArraySpecifierContext.d.ts'
import type { GLSLParser$InitializerContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$InitializerContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$DeclarationMemberContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    ASSIGN_OP(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    arraySpecifier(): GLSLParser$ArraySpecifierContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
    initializer(): GLSLParser$InitializerContext;
}