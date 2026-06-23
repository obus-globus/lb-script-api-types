import type { GLSLParser$InterpolationQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$InterpolationQualifierContext.d.ts'
import type { GLSLParser$InvariantQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$InvariantQualifierContext.d.ts'
import type { GLSLParser$LayoutQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$LayoutQualifierContext.d.ts'
import type { GLSLParser$PreciseQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$PreciseQualifierContext.d.ts'
import type { GLSLParser$PrecisionQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$PrecisionQualifierContext.d.ts'
import type { GLSLParser$StorageQualifierContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$StorageQualifierContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
export class GLSLParser$TypeQualifierContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    accept<T extends unknown>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
    interpolationQualifier(): GLSLParser$InterpolationQualifierContext[];
    interpolationQualifier(arg0: number): GLSLParser$InterpolationQualifierContext;
    invariantQualifier(): GLSLParser$InvariantQualifierContext[];
    invariantQualifier(arg0: number): GLSLParser$InvariantQualifierContext;
    layoutQualifier(): GLSLParser$LayoutQualifierContext[];
    layoutQualifier(arg0: number): GLSLParser$LayoutQualifierContext;
    preciseQualifier(): GLSLParser$PreciseQualifierContext[];
    preciseQualifier(arg0: number): GLSLParser$PreciseQualifierContext;
    precisionQualifier(): GLSLParser$PrecisionQualifierContext[];
    precisionQualifier(arg0: number): GLSLParser$PrecisionQualifierContext;
    storageQualifier(): GLSLParser$StorageQualifierContext[];
    storageQualifier(arg0: number): GLSLParser$StorageQualifierContext;
}