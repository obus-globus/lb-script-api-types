import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class ArrayAccessExpression extends Object implements Expression {
    constructor(arg0: Expression, arg1: Expression)
    // private array: Expression;
    // private index: Expression;
    array(): Expression;
    array(arg0: Expression): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    index(): Expression;
    index(arg0: Expression): void;
    toString(): string;
    visit<R extends unknown>(arg0: ExpressionVisitor<R>): R;
}