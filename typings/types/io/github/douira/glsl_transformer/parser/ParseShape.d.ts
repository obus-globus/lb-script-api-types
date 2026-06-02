import type { GLSLParser } from '../../../../../io/github/douira/glsl_transformer/GLSLParser.d.ts'
import type { GLSLParser$ExpressionContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$ExpressionContext.d.ts'
import type { GLSLParser$ExternalDeclarationContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$ExternalDeclarationContext.d.ts'
import type { GLSLParser$FullySpecifiedTypeContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$FullySpecifiedTypeContext.d.ts'
import type { GLSLParser$StatementContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$StatementContext.d.ts'
import type { GLSLParser$TranslationUnitContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$TranslationUnitContext.d.ts'
import type { TranslationUnit } from '../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { ASTNode } from '../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { ExternalDeclaration } from '../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { Statement } from '../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { FullySpecifiedType } from '../../../../../io/github/douira/glsl_transformer/ast/node/type/FullySpecifiedType.d.ts'
import type { ASTBuilder } from '../../../../../io/github/douira/glsl_transformer/ast/transform/ASTBuilder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class ParseShape<C extends ParserRuleContext, N extends ASTNode> extends Object {
    static EXPRESSION: ParseShape<GLSLParser$ExpressionContext, Expression>;
    static EXTERNAL_DECLARATION: ParseShape<GLSLParser$ExternalDeclarationContext, ExternalDeclaration>;
    static FULLY_SPECIFIED_TYPE: ParseShape<GLSLParser$FullySpecifiedTypeContext, FullySpecifiedType>;
    static STATEMENT: ParseShape<GLSLParser$StatementContext, Statement>;
    static TRANSLATION_UNIT: ParseShape<GLSLParser$TranslationUnitContext, TranslationUnit>;
    constructor(arg0: Class<C>, arg1: (param0: GLSLParser) => C, arg2: (param0: ASTBuilder, param1: C) => N)
    parseMethod: (param0: GLSLParser) => C;
    ruleType: Class<C>;
    visitMethod: (param0: ASTBuilder, param1: C) => N;
    _parseNodeSeparateInternal(arg0: string): N;
}