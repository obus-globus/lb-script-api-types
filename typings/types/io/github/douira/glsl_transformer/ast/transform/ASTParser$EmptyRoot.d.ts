import type { Identifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
export class ASTParser$EmptyRoot extends Root {
    static getActiveBuildRoot(): Root;
    static replaceExpressionsConcurrent(paramarg0: ASTParser, paramarg1: Expression[], paramarg2: string): boolean;
    constructor(null_: ASTParser)
    registerIdentifierRename(arg0: Identifier): void;
    registerNode(arg0: ASTNode, arg1: boolean): void;
    unregisterIdentifierRename(arg0: Identifier): void;
    unregisterNode(arg0: ASTNode, arg1: boolean): void;
}