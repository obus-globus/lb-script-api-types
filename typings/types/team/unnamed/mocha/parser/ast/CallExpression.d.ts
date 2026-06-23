import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class CallExpression extends Object implements Expression {
    constructor(arg0: Expression, arg1: Expression[])
    // private arguments: Expression[];
    // private function: Expression;
    arguments(): Expression[];
    equals(arg0: Object | null): boolean;
    function(): Expression;
    function(arg0: Expression): void;
    hashCode(): number;
    toString(): string;
    visit<R extends unknown>(arg0: ExpressionVisitor<R>): R;
}