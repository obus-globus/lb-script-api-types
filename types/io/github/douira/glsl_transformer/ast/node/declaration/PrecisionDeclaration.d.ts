import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Declaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration.d.ts'
import type { Declaration$DeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration$DeclarationType.d.ts'
import type { PrecisionQualifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/PrecisionQualifier.d.ts'
import type { TypeSpecifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PrecisionDeclaration extends Declaration {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: PrecisionQualifier, arg1: TypeSpecifier)
    precisionQualifier: PrecisionQualifier;
    typeSpecifier: TypeSpecifier;
    clone(): PrecisionDeclaration;
    cloneInto(arg0: Root): PrecisionDeclaration;
    declarationAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getDeclarationType(): Declaration$DeclarationType;
    getPrecisionQualifier(): PrecisionQualifier;
    getTypeSpecifier(): TypeSpecifier;
    setPrecisionQualifier(arg0: PrecisionQualifier): void;
    setTypeSpecifier(arg0: TypeSpecifier): void;
}