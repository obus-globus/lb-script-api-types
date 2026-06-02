import type { GLSLParser$ArraySpecifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ArraySpecifierContext.d.ts'
import type { GLSLParser$DeclarationContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DeclarationContext.d.ts'
import type { GLSLParser$StructBodyContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$StructBodyContext.d.ts'
import type { GLSLParser$TypeQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$TypeQualifierContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$InterfaceBlockDeclarationContext extends GLSLParser$DeclarationContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: GLSLParser$DeclarationContext)
    blockName: Token;
    variableName: Token;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(arg0: number): TerminalNode;
    SEMICOLON(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    arraySpecifier(): GLSLParser$ArraySpecifierContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    structBody(): GLSLParser$StructBodyContext;
    typeQualifier(): GLSLParser$TypeQualifierContext;
}