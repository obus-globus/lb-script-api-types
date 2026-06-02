import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Index<N extends ASTNode> extends Object{
    add(arg0: N): void;
    remove(arg0: N): void;
}