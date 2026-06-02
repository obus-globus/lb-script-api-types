import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export class ExecutionScopeExpression extends Object implements Expression {
    constructor(arg0: Expression[])
    // private expressions: Expression[];
    equals(arg0: Object | null): boolean;
    expressions(): Expression[];
    hashCode(): number;
    toString(): string;
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}