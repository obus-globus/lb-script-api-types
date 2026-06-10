import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { FullySpecifiedType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/FullySpecifiedType.d.ts'
import type { StructDeclarator } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructDeclarator.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StructMember extends InnerASTNode {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: FullySpecifiedType, arg1: Stream<StructDeclarator>)
    declarators: StructDeclarator[];
    type: FullySpecifiedType;
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    clone(): StructMember;
    cloneInto(arg0: Root): StructMember;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getDeclarators(): StructDeclarator[];
    getType(): FullySpecifiedType;
    setType(arg0: FullySpecifiedType): void;
}