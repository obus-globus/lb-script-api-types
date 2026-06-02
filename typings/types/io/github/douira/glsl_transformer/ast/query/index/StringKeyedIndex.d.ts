import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ReferenceExpression } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/ReferenceExpression.d.ts'
import type { Index } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/Index.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class StringKeyedIndex<V extends Object | number | string | boolean, N extends ASTNode, S extends V[], I extends { [key: string]: S }> extends Object implements Index<N> {
    constructor(arg0: I, arg1: () => S)
    index: I;
    setFactory: () => S;
    get(arg0: string): V[];
    getAncestors(arg0: string, arg1: Class<M>): Stream<M>;
    getNode(arg0: V): N;
    getOne(arg0: string): V;
    getOneReferenceExpression(arg0: string): ReferenceExpression;
    getReferenceExpressions(arg0: string): Stream<ReferenceExpression>;
    getStream(arg0: string): Stream<V>;
    getUnique(arg0: string): V;
    has(arg0: string): boolean;
}