import type { Identifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { FullySpecifiedType } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/FullySpecifiedType.d.ts'
import type { Initializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/initializer/Initializer.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IterationConditionInitializer extends InnerASTNode {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: FullySpecifiedType, arg1: Identifier, arg2: Initializer)
    initializer: Initializer;
    name: Identifier;
    type: FullySpecifiedType;
    accept<R extends unknown>(arg0: ASTVisitor<R>): R;
    clone(): IterationConditionInitializer;
    cloneInto(arg0: Root): IterationConditionInitializer;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getInitializer(): Initializer;
    getName(): Identifier;
    getType(): FullySpecifiedType;
    setInitializer(arg0: Initializer): void;
    setName(arg0: Identifier): void;
    setType(arg0: FullySpecifiedType): void;
}