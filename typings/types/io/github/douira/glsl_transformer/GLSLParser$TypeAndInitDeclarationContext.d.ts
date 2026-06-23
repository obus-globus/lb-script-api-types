import type { GLSLParser$DeclarationContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DeclarationContext.d.ts'
import type { GLSLParser$DeclarationMemberContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DeclarationMemberContext.d.ts'
import type { GLSLParser$FullySpecifiedTypeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FullySpecifiedTypeContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$TypeAndInitDeclarationContext extends GLSLParser$DeclarationContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: GLSLParser$DeclarationContext)
    declarationMembers: GLSLParser$DeclarationMemberContext[];
    COMMA(): TerminalNode[];
    COMMA(arg0: number): TerminalNode;
    SEMICOLON(): TerminalNode;
    accept<T extends unknown>(arg0: ParseTreeVisitor<T>): T;
    declarationMember(): GLSLParser$DeclarationMemberContext[];
    declarationMember(arg0: number): GLSLParser$DeclarationMemberContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    fullySpecifiedType(): GLSLParser$FullySpecifiedTypeContext;
}