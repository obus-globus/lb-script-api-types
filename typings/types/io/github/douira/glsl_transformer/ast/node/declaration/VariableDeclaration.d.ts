import type { Identifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Declaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration.d.ts'
import type { Declaration$DeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration$DeclarationType.d.ts'
import type { TypeQualifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifier.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class VariableDeclaration extends Declaration {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: TypeQualifier)
    constructor(arg0: TypeQualifier, arg1: Stream<Identifier>)
    names: Identifier[];
    typeQualifier: TypeQualifier;
    clone(): VariableDeclaration;
    cloneInto(arg0: Root): VariableDeclaration;
    declarationAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getDeclarationType(): Declaration$DeclarationType;
    getNames(): Identifier[];
    getTypeQualifier(): TypeQualifier;
    setTypeQualifier(arg0: TypeQualifier): void;
}