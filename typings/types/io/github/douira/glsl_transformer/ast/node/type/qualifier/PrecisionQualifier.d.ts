import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { PrecisionQualifier$PrecisionLevel } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/PrecisionQualifier$PrecisionLevel.d.ts'
import type { TypeQualifierPart } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart.d.ts'
import type { TypeQualifierPart$QualifierType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart$QualifierType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PrecisionQualifier extends TypeQualifierPart {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: PrecisionQualifier$PrecisionLevel)
    precisionLevel: PrecisionQualifier$PrecisionLevel;
    clone(): PrecisionQualifier;
    cloneInto(arg0: Root): PrecisionQualifier;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getQualifierType(): TypeQualifierPart$QualifierType;
    typeQualifierPartAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
}