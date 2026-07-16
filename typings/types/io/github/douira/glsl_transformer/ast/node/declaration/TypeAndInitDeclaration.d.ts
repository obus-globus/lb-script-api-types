import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Declaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration.d.ts'
import type { Declaration$DeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration$DeclarationType.d.ts'
import type { DeclarationMember } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/DeclarationMember.d.ts'
import type { FullySpecifiedType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/FullySpecifiedType.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TypeAndInitDeclaration extends Declaration {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: FullySpecifiedType)
    constructor(arg0: FullySpecifiedType, arg1: Stream<DeclarationMember>)
    members: DeclarationMember[];
    type: FullySpecifiedType;
    clone(): TypeAndInitDeclaration;
    cloneInto(arg0: Root): TypeAndInitDeclaration;
    declarationAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getDeclarationType(): Declaration$DeclarationType;
    getMembers(): DeclarationMember[];
    getType(): FullySpecifiedType;
    setType(arg0: FullySpecifiedType): void;
}