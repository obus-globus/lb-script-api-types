import type { GLSLParser$CustomDirectiveContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$CustomDirectiveContext.d.ts'
import type { GLSLParser$DeclarationContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DeclarationContext.d.ts'
import type { GLSLParser$EmptyDeclarationContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$EmptyDeclarationContext.d.ts'
import type { GLSLParser$ExtensionDirectiveContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ExtensionDirectiveContext.d.ts'
import type { GLSLParser$FunctionDefinitionContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FunctionDefinitionContext.d.ts'
import type { GLSLParser$IncludeDirectiveContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$IncludeDirectiveContext.d.ts'
import type { GLSLParser$LayoutDefaultsContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$LayoutDefaultsContext.d.ts'
import type { GLSLParser$PragmaDirectiveContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$PragmaDirectiveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
export class GLSLParser$ExternalDeclarationContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    customDirective(): GLSLParser$CustomDirectiveContext;
    declaration(): GLSLParser$DeclarationContext;
    emptyDeclaration(): GLSLParser$EmptyDeclarationContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    extensionDirective(): GLSLParser$ExtensionDirectiveContext;
    functionDefinition(): GLSLParser$FunctionDefinitionContext;
    getRuleIndex(): number;
    includeDirective(): GLSLParser$IncludeDirectiveContext;
    layoutDefaults(): GLSLParser$LayoutDefaultsContext;
    pragmaDirective(): GLSLParser$PragmaDirectiveContext;
}