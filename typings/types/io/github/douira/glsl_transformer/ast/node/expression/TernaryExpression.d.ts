import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class TernaryExpression extends Expression {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Expression, arg1: Expression, arg2: Expression)
    first: Expression;
    second: Expression;
    third: Expression;
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    clone(): TernaryExpression;
    cloneInto(arg0: Root): TernaryExpression;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getFirst(): Expression;
    getSecond(): Expression;
    getThird(): Expression;
    setFirst(arg0: Expression): void;
    setSecond(arg0: Expression): void;
    setThird(arg0: Expression): void;
}