import type { Identifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { LayoutQualifierPart } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifierPart.d.ts'
import type { LayoutQualifierPart$LayoutQualifierType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifierPart$LayoutQualifierType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class NamedLayoutQualifierPart extends LayoutQualifierPart {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Identifier)
    constructor(arg0: Identifier, arg1: Expression)
    expression: Expression;
    name: Identifier;
    clone(): NamedLayoutQualifierPart;
    cloneInto(arg0: Root): NamedLayoutQualifierPart;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getExpression(): Expression;
    getLayoutQualifierType(): LayoutQualifierPart$LayoutQualifierType;
    getName(): Identifier;
    layoutQualifierPartAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
    setExpression(arg0: Expression): void;
    setName(arg0: Identifier): void;
}