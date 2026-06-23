import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BinaryExpression$Op } from '../../../../../team/unnamed/mocha/parser/ast/BinaryExpression$Op.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class BinaryExpression extends Object implements Expression {
    constructor(arg0: BinaryExpression$Op, arg1: Expression, arg2: Expression)
    // private left: Expression;
    // private op: BinaryExpression$Op;
    // private right: Expression;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Expression;
    left(arg0: Expression): void;
    op(): BinaryExpression$Op;
    right(): Expression;
    right(arg0: Expression): void;
    toString(): string;
    visit<R extends unknown>(arg0: ExpressionVisitor<R>): R;
}