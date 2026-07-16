import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
export class ChildNodeList<Child extends ASTNode> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static collect<Child extends ASTNode>(paramarg0: Stream<Child>, paramarg1: InnerASTNode): Child[];
}