import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Index } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/Index.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NodeIndex<S extends ASTNode[]> extends Object implements Index<ASTNode> {
    static withOrdered(): NodeIndex<ASTNode[]>;
    static withUnordered(): NodeIndex<ASTNode[]>;
    constructor(arg0: () => S)
    index: JavaMap<Class<ASTNode>, S>;
    setFactory: () => S;
    add(arg0: ASTNode): void;
    get<N extends ASTNode>(arg0: N): N[];
    get<N extends ASTNode>(arg0: Class<N>): N[];
    getOne<N extends ASTNode>(arg0: N): N;
    getOne<N extends ASTNode>(arg0: Class<N>): N;
    getStream<N extends ASTNode>(arg0: Class<N>): Stream<N>;
    getUnique<N extends ASTNode>(arg0: N): N;
    getUnique<N extends ASTNode>(arg0: Class<N>): N;
    has(arg0: ASTNode): boolean;
    has(arg0: Class<ASTNode>): boolean;
    hasExact(arg0: ASTNode): boolean;
    remove(arg0: ASTNode): void;
}