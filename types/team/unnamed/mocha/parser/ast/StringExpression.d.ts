import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class StringExpression extends Object implements Expression {
    constructor(arg0: string)
    // private value: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): string;
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}