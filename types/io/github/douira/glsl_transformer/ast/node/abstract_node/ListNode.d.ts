import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ListNode<Child extends ASTNode> extends Object{
    getChildren(): Child[];
}