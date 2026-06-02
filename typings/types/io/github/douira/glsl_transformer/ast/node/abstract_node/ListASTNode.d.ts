import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { ListNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ListNode.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ListASTNode<Child extends ASTNode> extends InnerASTNode implements ListNode<Child> {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Stream<Child>)
    readonly children: Child[];
    cloneInto(arg0: Root): ListASTNode<Child>;
    getChildren(): Child[];
    getClonedChildren(): Stream<Child>;
}