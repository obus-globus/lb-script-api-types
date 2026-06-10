import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { TypeQualifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifier.d.ts'
import type { TypeSpecifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FullySpecifiedType extends InnerASTNode {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: TypeQualifier, arg1: TypeSpecifier)
    constructor(arg0: TypeSpecifier)
    typeQualifier: TypeQualifier;
    typeSpecifier: TypeSpecifier;
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    clone(): FullySpecifiedType;
    cloneInto(arg0: Root): FullySpecifiedType;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getTypeQualifier(): TypeQualifier;
    getTypeSpecifier(): TypeSpecifier;
    setTypeQualifier(arg0: TypeQualifier): void;
    setTypeSpecifier(arg0: TypeSpecifier): void;
}