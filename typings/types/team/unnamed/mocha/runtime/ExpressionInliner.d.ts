import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessExpression } from '../../../../team/unnamed/mocha/parser/ast/AccessExpression.d.ts'
import type { ArrayAccessExpression } from '../../../../team/unnamed/mocha/parser/ast/ArrayAccessExpression.d.ts'
import type { BinaryExpression } from '../../../../team/unnamed/mocha/parser/ast/BinaryExpression.d.ts'
import type { CallExpression } from '../../../../team/unnamed/mocha/parser/ast/CallExpression.d.ts'
import type { DoubleExpression } from '../../../../team/unnamed/mocha/parser/ast/DoubleExpression.d.ts'
import type { ExecutionScopeExpression } from '../../../../team/unnamed/mocha/parser/ast/ExecutionScopeExpression.d.ts'
import type { Expression } from '../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionVisitor } from '../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
import type { IdentifierExpression } from '../../../../team/unnamed/mocha/parser/ast/IdentifierExpression.d.ts'
import type { StatementExpression } from '../../../../team/unnamed/mocha/parser/ast/StatementExpression.d.ts'
import type { StringExpression } from '../../../../team/unnamed/mocha/parser/ast/StringExpression.d.ts'
import type { TernaryConditionalExpression } from '../../../../team/unnamed/mocha/parser/ast/TernaryConditionalExpression.d.ts'
import type { UnaryExpression } from '../../../../team/unnamed/mocha/parser/ast/UnaryExpression.d.ts'
import type { ExpressionInterpreter } from '../../../../team/unnamed/mocha/runtime/ExpressionInterpreter.d.ts'
import type { Scope } from '../../../../team/unnamed/mocha/runtime/Scope.d.ts'
export class ExpressionInliner extends Object implements ExpressionVisitor<Expression> {
    constructor(arg0: ExpressionInterpreter<Object>, arg1: Scope)
    // private interpreter: ExpressionInterpreter<Object>;
    // private scope: Scope;
    visit(arg0: Expression): Expression;
    visitAccess<R extends Object | number | string | boolean>(arg0: AccessExpression): R;
    visitArrayAccess<R extends Object | number | string | boolean>(arg0: ArrayAccessExpression): R;
    visitBinary<R extends Object | number | string | boolean>(arg0: BinaryExpression): R;
    visitBinary(arg0: BinaryExpression): Expression;
    visitCall<R extends Object | number | string | boolean>(arg0: CallExpression): R;
    visitCall(arg0: CallExpression): Expression;
    visitDouble<R extends Object | number | string | boolean>(arg0: DoubleExpression): R;
    visitExecutionScope<R extends Object | number | string | boolean>(arg0: ExecutionScopeExpression): R;
    visitIdentifier<R extends Object | number | string | boolean>(arg0: IdentifierExpression): R;
    visitStatement<R extends Object | number | string | boolean>(arg0: StatementExpression): R;
    visitString<R extends Object | number | string | boolean>(arg0: StringExpression): R;
    visitTernaryConditional<R extends Object | number | string | boolean>(arg0: TernaryConditionalExpression): R;
    visitTernaryConditional(arg0: TernaryConditionalExpression): Expression;
    visitUnary<R extends Object | number | string | boolean>(arg0: UnaryExpression): R;
}