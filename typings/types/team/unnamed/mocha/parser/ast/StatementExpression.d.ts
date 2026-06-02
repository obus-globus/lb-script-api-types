import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
import type { StatementExpression$Op } from '../../../../../team/unnamed/mocha/parser/ast/StatementExpression$Op.d.ts'
export class StatementExpression extends Object implements Expression {
    constructor(arg0: StatementExpression$Op)
    // private op: StatementExpression$Op;
    op(): StatementExpression$Op;
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}