import type { Identifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Declaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration.d.ts'
import type { Declaration$DeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration$DeclarationType.d.ts'
import type { TypeQualifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifier.d.ts'
import type { ArraySpecifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/ArraySpecifier.d.ts'
import type { StructBody } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructBody.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InterfaceBlockDeclaration extends Declaration {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: TypeQualifier, arg1: Identifier, arg2: StructBody)
    constructor(arg0: TypeQualifier, arg1: Identifier, arg2: StructBody, arg3: Identifier)
    constructor(arg0: TypeQualifier, arg1: Identifier, arg2: StructBody, arg3: Identifier, arg4: ArraySpecifier)
    arraySpecifier: ArraySpecifier;
    blockName: Identifier;
    structBody: StructBody;
    typeQualifier: TypeQualifier;
    variableName: Identifier;
    clone(): InterfaceBlockDeclaration;
    cloneInto(arg0: Root): InterfaceBlockDeclaration;
    declarationAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getArraySpecifier(): ArraySpecifier;
    getBlockName(): Identifier;
    getDeclarationType(): Declaration$DeclarationType;
    getStructBody(): StructBody;
    getTypeQualifier(): TypeQualifier;
    getVariableName(): Identifier;
    setArraySpecifier(arg0: ArraySpecifier): void;
    setBlockName(arg0: Identifier): void;
    setStructBody(arg0: StructBody): void;
    setTypeQualifier(arg0: TypeQualifier): void;
    setVariableName(arg0: Identifier): void;
}