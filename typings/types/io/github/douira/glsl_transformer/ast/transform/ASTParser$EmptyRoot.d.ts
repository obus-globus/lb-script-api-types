import type { Identifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTParser$EmptyRoot extends Root {
    static getActiveBuildRoot(): Root;
    static replaceExpressionsConcurrent(paramarg0: ASTParser, paramarg1: (Object | null)[], paramarg2: string): boolean;
    constructor(null_: ASTParser$EmptyRoot)
    registerIdentifierRename(arg0: Identifier): void;
    registerNode(arg0: ASTNode, arg1: boolean): void;
    unregisterIdentifierRename(arg0: Identifier): void;
    unregisterNode(arg0: ASTNode, arg1: boolean): void;
}