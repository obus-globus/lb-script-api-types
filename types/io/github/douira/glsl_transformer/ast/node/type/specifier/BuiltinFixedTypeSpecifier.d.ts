import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ArraySpecifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/ArraySpecifier.d.ts'
import type { BuiltinFixedTypeSpecifier$BuiltinType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/BuiltinFixedTypeSpecifier$BuiltinType.d.ts'
import type { TypeSpecifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { TypeSpecifier$SpecifierType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier$SpecifierType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class BuiltinFixedTypeSpecifier extends TypeSpecifier {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: BuiltinFixedTypeSpecifier$BuiltinType)
    constructor(arg0: BuiltinFixedTypeSpecifier$BuiltinType, arg1: ArraySpecifier)
    type: BuiltinFixedTypeSpecifier$BuiltinType;
    clone(): BuiltinFixedTypeSpecifier;
    cloneInto(arg0: Root): BuiltinFixedTypeSpecifier;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getSpecifierType(): TypeSpecifier$SpecifierType;
    typeSpecifierAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
}