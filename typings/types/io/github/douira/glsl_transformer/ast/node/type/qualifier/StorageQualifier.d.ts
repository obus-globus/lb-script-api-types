import type { Identifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { StorageQualifier$StorageType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/StorageQualifier$StorageType.d.ts'
import type { TypeQualifierPart } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart.d.ts'
import type { TypeQualifierPart$QualifierType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart$QualifierType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StorageQualifier extends TypeQualifierPart {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: StorageQualifier$StorageType)
    constructor(arg0: Stream<Identifier>)
    storageType: StorageQualifier$StorageType;
    typeNames: Identifier[];
    clone(): StorageQualifier;
    cloneInto(arg0: Root): StorageQualifier;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getQualifierType(): TypeQualifierPart$QualifierType;
    getTypeNames(): Identifier[];
    typeQualifierPartAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
}