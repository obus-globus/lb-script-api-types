import type { GLSLParser$ArraySpecifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$ArraySpecifierContext.d.ts'
import type { GLSLParser$BuiltinTypeSpecifierFixedContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$BuiltinTypeSpecifierFixedContext.d.ts'
import type { GLSLParser$BuiltinTypeSpecifierParseableContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$BuiltinTypeSpecifierParseableContext.d.ts'
import type { GLSLParser$StructSpecifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$StructSpecifierContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$TypeSpecifierContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    IDENTIFIER(): TerminalNode;
    accept<T extends unknown>(arg0: ParseTreeVisitor<T>): T;
    arraySpecifier(): GLSLParser$ArraySpecifierContext;
    builtinTypeSpecifierFixed(): GLSLParser$BuiltinTypeSpecifierFixedContext;
    builtinTypeSpecifierParseable(): GLSLParser$BuiltinTypeSpecifierParseableContext;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
    structSpecifier(): GLSLParser$StructSpecifierContext;
}