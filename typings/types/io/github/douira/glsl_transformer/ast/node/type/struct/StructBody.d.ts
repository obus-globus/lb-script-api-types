import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ListASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ListASTNode.d.ts'
import type { StructMember } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructMember.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StructBody extends ListASTNode<StructMember> {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Stream<StructMember>)
    accept<R extends unknown>(arg0: ASTVisitor<R>): R;
    clone(): StructBody;
    cloneInto(arg0: Root): StructBody;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getMembers(): StructMember[];
}