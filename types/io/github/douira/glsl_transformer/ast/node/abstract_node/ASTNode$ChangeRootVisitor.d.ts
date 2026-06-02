import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTVoidVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVoidVisitor.d.ts'
export class ASTNode$ChangeRootVisitor extends ASTVoidVisitor {
    constructor(null_: ASTNode$ChangeRootVisitor, arg1: Root)
    // private rootToSet: Root;
    visitVoid(arg0: ASTNode): void;
}