import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ListNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ListNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface GeneralASTVisitor<R extends unknown> extends Object{
    aggregateResult(arg0: R, arg1: R): R;
    aggregateResult(arg0: R, arg1: R, arg2: R): R;
    defaultResult(): R;
    initialResult(): R;
    startVisit(arg0: ASTNode): R;
    superNodeTypeResult(): R;
    visit(arg0: R, arg1: ASTNode): R;
    visit(arg0: ASTNode): R;
    visitChildren(arg0: ASTNode[]): R;
    visitChildren(arg0: R, arg1: ASTNode[]): R;
    visitChildren(arg0: R, arg1: ListNode<ASTNode>): R;
    visitChildren(arg0: ListNode<ASTNode>): R;
    visitData(arg0: R, arg1: Object): R;
    visitData(arg0: Object): R;
    visitSafe(arg0: R, arg1: ASTNode): R;
    visitThreeChildren(arg0: ASTNode, arg1: ASTNode, arg2: ASTNode): R;
    visitTwoChildren(arg0: ASTNode, arg1: ASTNode): R;
}