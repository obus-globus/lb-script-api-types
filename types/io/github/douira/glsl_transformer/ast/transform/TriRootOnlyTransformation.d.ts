import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TriRootOnlyTransformation<N extends ASTNode> extends Object{
    accept(arg0: N, arg1: N, arg2: N, arg3: Root, arg4: Root, arg5: Root): void;
}