import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
import type { UnaryExpression$Op } from '../../../../../team/unnamed/mocha/parser/ast/UnaryExpression$Op.d.ts'
export class UnaryExpression extends Object implements Expression {
    constructor(arg0: UnaryExpression$Op, arg1: Expression)
    // private expression: Expression;
    // private op: UnaryExpression$Op;
    equals(arg0: Object | null): boolean;
    expression(): Expression;
    expression(arg0: Expression): void;
    hashCode(): number;
    op(): UnaryExpression$Op;
    toString(): string;
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}