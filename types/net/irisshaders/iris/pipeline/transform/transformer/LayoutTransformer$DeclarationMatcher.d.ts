import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { StorageQualifier$StorageType } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/StorageQualifier$StorageType.d.ts'
import type { Matcher } from '../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher.d.ts'
export class LayoutTransformer$DeclarationMatcher extends Matcher<ExternalDeclaration> {
    constructor(arg0: StorageQualifier$StorageType)
    // private storageType: StorageQualifier$StorageType;
    matchesExtract(arg0: ExternalDeclaration): boolean;
}