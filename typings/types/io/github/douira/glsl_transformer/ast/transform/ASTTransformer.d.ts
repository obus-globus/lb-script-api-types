import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { Expression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { Statement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { PrintType } from '../../../../../../io/github/douira/glsl_transformer/ast/print/PrintType.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { RootSupplier } from '../../../../../../io/github/douira/glsl_transformer/ast/query/RootSupplier.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { ParameterizedTransformer } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ParameterizedTransformer.d.ts'
import type { TokenFilter } from '../../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ASTTransformer<J extends JobParameters, V extends Object | number | string | boolean> extends ASTParser implements ParameterizedTransformer<J, V> {
    static _getInternalInstance(): ASTParser;
    constructor()
    readonly jobParameters: J;
    readonly printType: PrintType;
    readonly rootSupplier: RootSupplier;
    getJobParameters(): J;
    getPrintType(): PrintType;
    getRootSupplier(): RootSupplier;
    parseSeparateExpression(arg0: string): Expression;
    parseSeparateExternalDeclaration(arg0: string): ExternalDeclaration;
    parseSeparateStatement(arg0: string): Statement;
    parseSeparateTranslationUnit(arg0: string): TranslationUnit;
    setJobParameters(arg0: J): void;
    setPrintType(arg0: PrintType): void;
    setRootSupplier(arg0: RootSupplier): void;
    setTokenFilter(arg0: TokenFilter<Object>): void;
    supplyRoot(): Root;
    transform(arg0: V): V;
    transform(arg0: V, arg1: J): V;
    transform(arg0: RootSupplier, arg1: V): V;
    transform(arg0: V, arg1: J): V;
}