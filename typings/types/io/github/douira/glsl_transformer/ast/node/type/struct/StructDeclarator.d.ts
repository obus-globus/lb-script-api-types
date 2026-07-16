import type { Identifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { ArraySpecifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/ArraySpecifier.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StructDeclarator extends InnerASTNode {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Identifier)
    constructor(arg0: Identifier, arg1: ArraySpecifier)
    arraySpecifier: ArraySpecifier;
    name: Identifier;
    accept<R extends unknown>(arg0: ASTVisitor<R>): R;
    clone(): StructDeclarator;
    cloneInto(arg0: Root): StructDeclarator;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getArraySpecifier(): ArraySpecifier;
    getName(): Identifier;
    setArraySpecifier(arg0: ArraySpecifier): void;
    setName(arg0: Identifier): void;
}