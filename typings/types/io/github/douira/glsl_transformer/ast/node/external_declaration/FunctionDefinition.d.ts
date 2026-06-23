import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { ExternalDeclaration$ExternalDeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration$ExternalDeclarationType.d.ts'
import type { CompoundStatement } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/CompoundStatement.d.ts'
import type { FunctionPrototype } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/FunctionPrototype.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FunctionDefinition extends ExternalDeclaration {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: FunctionPrototype, arg1: CompoundStatement)
    body: CompoundStatement;
    functionPrototype: FunctionPrototype;
    clone(): FunctionDefinition;
    cloneInto(arg0: Root): FunctionDefinition;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    externalDeclarationAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
    getBody(): CompoundStatement;
    getExternalDeclarationType(): ExternalDeclaration$ExternalDeclarationType;
    getFunctionPrototype(): FunctionPrototype;
    setBody(arg0: CompoundStatement): void;
    setFunctionPrototype(arg0: FunctionPrototype): void;
}