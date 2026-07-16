import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
export abstract class InnerASTNode extends ASTNode {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor()
    clone(): InnerASTNode;
    cloneInto(arg0: Root): InnerASTNode;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
}