import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { Expression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { StorageQualifier$StorageType } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/StorageQualifier$StorageType.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { AutoHintedMatcher } from '../../../../../../io/github/douira/glsl_transformer/ast/query/match/AutoHintedMatcher.d.ts'
import type { Matcher } from '../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { Type } from '../../../../../../io/github/douira/glsl_transformer/util/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameters } from '../../../../../../net/irisshaders/iris/pipeline/transform/parameter/Parameters.d.ts'
export class CommonTransformer extends Object {
    static glTextureMatrix0: AutoHintedMatcher<Expression>;
    static glTextureMatrix1: AutoHintedMatcher<Expression>;
    static glTextureMatrix2: AutoHintedMatcher<Expression>;
    static sampler: Matcher<ExternalDeclaration>;
    static addIfNotExists(paramarg0: Root, paramarg1: ASTParser, paramarg2: TranslationUnit, paramarg3: string, paramarg4: Type, paramarg5: StorageQualifier$StorageType): void;
    static addIfNotExists(paramarg0: Root, paramarg1: ASTParser, paramarg2: TranslationUnit, paramarg3: string, paramarg4: Type, paramarg5: StorageQualifier$StorageType, paramarg6: number): void;
    static applyIntelHd4000Workaround(paramarg0: Root): void;
    static patchMultiTexCoord3(paramarg0: ASTParser, paramarg1: TranslationUnit, paramarg2: Root, paramarg3: Parameters): void;
    static replaceGlMultiTexCoordBounded(paramarg0: ASTParser, paramarg1: Root, paramarg2: number, paramarg3: number): void;
    static replaceMidBlock(paramarg0: ASTParser, paramarg1: TranslationUnit, paramarg2: Root, paramarg3: Parameters): void;
    static transform(paramarg0: ASTParser, paramarg1: TranslationUnit, paramarg2: Root, paramarg3: Parameters, paramarg4: boolean): void;
    static upgradeStorageQualifiers(paramarg0: ASTParser, paramarg1: TranslationUnit, paramarg2: Root, paramarg3: Parameters): void;
    constructor()
}