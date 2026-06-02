import type { GLSLParser$TypeQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$TypeQualifierContext.d.ts'
import type { GLSLParser$TypeSpecifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$TypeSpecifierContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
export class GLSLParser$FullySpecifiedTypeContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
    typeQualifier(): GLSLParser$TypeQualifierContext;
    typeSpecifier(): GLSLParser$TypeSpecifierContext;
}