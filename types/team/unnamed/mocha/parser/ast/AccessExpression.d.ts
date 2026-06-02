import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class AccessExpression extends Object implements Expression {
    constructor(arg0: Expression, arg1: string)
    // private object: Expression;
    // private property: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    object(): Expression;
    object(arg0: Expression): void;
    property(): string;
    toString(): string;
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}