import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class DoubleExpression extends Object implements Expression {
    static ONE: DoubleExpression;
    static ZERO: DoubleExpression;
    constructor(arg0: number)
    // private value: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): number;
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}