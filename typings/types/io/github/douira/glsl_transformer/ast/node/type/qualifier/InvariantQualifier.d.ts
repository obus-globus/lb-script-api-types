import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { TypeQualifierPart } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart.d.ts'
import type { TypeQualifierPart$QualifierType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart$QualifierType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class InvariantQualifier extends TypeQualifierPart {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor()
    clone(): InvariantQualifier;
    cloneInto(arg0: Root): InvariantQualifier;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getQualifierType(): TypeQualifierPart$QualifierType;
    typeQualifierPartAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
}