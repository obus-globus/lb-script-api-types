import type { GLSLParser$DeclarationContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$DeclarationContext.d.ts'
import type { GLSLParser$FunctionPrototypeContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$FunctionPrototypeContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$FunctionDeclarationContext extends GLSLParser$DeclarationContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: GLSLParser$DeclarationContext)
    SEMICOLON(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    functionPrototype(): GLSLParser$FunctionPrototypeContext;
}