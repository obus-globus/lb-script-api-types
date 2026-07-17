import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { StorageQualifier$StorageType } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/StorageQualifier$StorageType.d.ts'
import type { Matcher } from '../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LayoutTransformer$DeclarationMatcher extends Matcher<ExternalDeclaration> {
    constructor(arg0: StorageQualifier$StorageType)
    // private storageType: StorageQualifier$StorageType;
    matchesExtract(arg0: ExternalDeclaration): boolean;
    matchesExtract(arg0: ExternalDeclaration, arg1: JavaMap<string, Object>, arg2: JavaMap<string, ASTNode>): boolean;
}