import type { Identifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ArraySpecifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/ArraySpecifier.d.ts'
import type { TypeSpecifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { TypeSpecifier$SpecifierType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier$SpecifierType.d.ts'
import type { StructBody } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructBody.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StructSpecifier extends TypeSpecifier {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Identifier, arg1: StructBody)
    constructor(arg0: Identifier, arg1: StructBody, arg2: ArraySpecifier)
    constructor(arg0: StructBody)
    constructor(arg0: StructBody, arg1: ArraySpecifier)
    name: Identifier;
    structBody: StructBody;
    clone(): StructSpecifier;
    cloneInto(arg0: Root): StructSpecifier;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getName(): Identifier;
    getSpecifierType(): TypeSpecifier$SpecifierType;
    getStructBody(): StructBody;
    setName(arg0: Identifier): void;
    setStructBody(arg0: StructBody): void;
    typeSpecifierAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
}