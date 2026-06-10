import type { Identifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ListASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ListASTNode.d.ts'
import type { FunctionParameter } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/FunctionParameter.d.ts'
import type { FullySpecifiedType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/FullySpecifiedType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class FunctionPrototype extends ListASTNode<FunctionParameter> {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: FullySpecifiedType, arg1: Identifier)
    constructor(arg0: FullySpecifiedType, arg1: Identifier, arg2: Stream<FunctionParameter>)
    name: Identifier;
    returnType: FullySpecifiedType;
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    clone(): FunctionPrototype;
    cloneInto(arg0: Root): FunctionPrototype;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getName(): Identifier;
    getParameters(): FunctionParameter[];
    getReturnType(): FullySpecifiedType;
    setName(arg0: Identifier): void;
    setReturnType(arg0: FullySpecifiedType): void;
}