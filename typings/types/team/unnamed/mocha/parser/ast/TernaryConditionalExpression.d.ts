import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class TernaryConditionalExpression extends Object implements Expression {
    constructor(arg0: Expression, arg1: Expression, arg2: Expression)
    // private conditional: Expression;
    // private falseExpression: Expression;
    // private trueExpression: Expression;
    condition(): Expression;
    condition(arg0: Expression): void;
    equals(arg0: Object | null): boolean;
    falseExpression(): Expression;
    falseExpression(arg0: Expression): void;
    hashCode(): number;
    toString(): string;
    trueExpression(): Expression;
    trueExpression(arg0: Expression): void;
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}