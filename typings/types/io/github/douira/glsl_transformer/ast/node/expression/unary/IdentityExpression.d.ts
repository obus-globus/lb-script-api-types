import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Expression$ExpressionType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression$ExpressionType.d.ts'
import type { UnaryExpression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/UnaryExpression.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class IdentityExpression extends UnaryExpression {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Expression)
    clone(): IdentityExpression;
    cloneInto(arg0: Root): IdentityExpression;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    expressionAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
    getExpressionType(): Expression$ExpressionType;
}