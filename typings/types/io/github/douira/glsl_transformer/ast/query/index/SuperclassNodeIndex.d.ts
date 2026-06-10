import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { NodeIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/NodeIndex.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
export class SuperclassNodeIndex<S extends ASTNode[]> extends NodeIndex<S> {
    static withOrdered(): NodeIndex<ASTNode[]>;
    static withOrdered(): SuperclassNodeIndex<ASTNode[]>;
    static withUnordered(): NodeIndex<ASTNode[]>;
    static withUnordered(): SuperclassNodeIndex<ASTNode[]>;
    constructor(arg0: () => S)
    add(arg0: ASTNode): void;
    iterateClasses(arg0: ASTNode, arg1: (param0: Class<ASTNode>, param1: ASTNode) => void): void;
    remove(arg0: ASTNode): void;
}