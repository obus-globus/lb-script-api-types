import type { GLSLParser$ExternalDeclarationContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ExternalDeclarationContext.d.ts'
import type { GLSLParser$VersionStatementContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$VersionStatementContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$TranslationUnitContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    EOF(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    externalDeclaration(): GLSLParser$ExternalDeclarationContext[];
    externalDeclaration(arg0: number): GLSLParser$ExternalDeclarationContext;
    getRuleIndex(): number;
    versionStatement(): GLSLParser$VersionStatementContext;
}