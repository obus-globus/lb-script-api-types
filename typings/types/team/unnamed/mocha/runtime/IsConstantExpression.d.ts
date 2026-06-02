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
import type { ObjectValue } from '../../../../team/unnamed/mocha/runtime/value/ObjectValue.d.ts'
export class IsConstantExpression extends Object implements ExpressionVisitor<boolean> {
    static test(paramarg0: Expression): boolean;
    static test(paramarg0: Expression, paramarg1: Scope): boolean;
    private constructor(arg0: Scope)
    // private evaluator: ExpressionInterpreter<Object>;
    // private scope: ObjectValue;
    visit(arg0: Expression): boolean;
    visitAccess<R extends Object | number | string | boolean>(arg0: AccessExpression): R;
    visitAccess(arg0: AccessExpression): boolean;
    visitArrayAccess<R extends Object | number | string | boolean>(arg0: ArrayAccessExpression): R;
    visitArrayAccess(arg0: ArrayAccessExpression): boolean;
    visitBinary<R extends Object | number | string | boolean>(arg0: BinaryExpression): R;
    visitBinary(arg0: BinaryExpression): boolean;
    visitCall<R extends Object | number | string | boolean>(arg0: CallExpression): R;
    visitCall(arg0: CallExpression): boolean;
    visitDouble<R extends Object | number | string | boolean>(arg0: DoubleExpression): R;
    visitDouble(arg0: DoubleExpression): boolean;
    visitExecutionScope<R extends Object | number | string | boolean>(arg0: ExecutionScopeExpression): R;
    visitExecutionScope(arg0: ExecutionScopeExpression): boolean;
    visitIdentifier<R extends Object | number | string | boolean>(arg0: IdentifierExpression): R;
    visitIdentifier(arg0: IdentifierExpression): boolean;
    visitStatement<R extends Object | number | string | boolean>(arg0: StatementExpression): R;
    visitStatement(arg0: StatementExpression): boolean;
    visitString<R extends Object | number | string | boolean>(arg0: StringExpression): R;
    visitString(arg0: StringExpression): boolean;
    visitTernaryConditional<R extends Object | number | string | boolean>(arg0: TernaryConditionalExpression): R;
    visitTernaryConditional(arg0: TernaryConditionalExpression): boolean;
    visitUnary<R extends Object | number | string | boolean>(arg0: UnaryExpression): R;
    visitUnary(arg0: UnaryExpression): boolean;
}