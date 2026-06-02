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
import type { ExecutionContext } from '../../../../team/unnamed/mocha/runtime/ExecutionContext.d.ts'
import type { Scope } from '../../../../team/unnamed/mocha/runtime/Scope.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class ExpressionInterpreter<T extends Object | number | string | boolean> extends Object implements ExpressionVisitor<Value>, ExecutionContext<T> {
    constructor(arg0: T, arg1: Scope)
    // private entity: T;
    // private flag: Object;
    // private returnValue: Value;
    // private scope: Scope;
    // private warnOnReflectiveFunctionUsage: boolean;
    bindings(): Scope;
    createChild(): ExpressionInterpreter<T>;
    createChild<R extends Object | number | string | boolean>(arg0: R): ExpressionInterpreter<R>;
    entity(): T;
    eval(arg0: Expression): Value;
    flag(): Object;
    flag(arg0: Object): void;
    popReturnValue(): Value;
    visit(arg0: Expression): Value;
    visitAccess<R extends Object | number | string | boolean>(arg0: AccessExpression): R;
    visitAccess(arg0: AccessExpression): Value;
    visitArrayAccess<R extends Object | number | string | boolean>(arg0: ArrayAccessExpression): R;
    visitArrayAccess(arg0: ArrayAccessExpression): Value;
    visitBinary<R extends Object | number | string | boolean>(arg0: BinaryExpression): R;
    visitBinary(arg0: BinaryExpression): Value;
    visitCall<R extends Object | number | string | boolean>(arg0: CallExpression): R;
    visitCall(arg0: CallExpression): Value;
    visitDouble<R extends Object | number | string | boolean>(arg0: DoubleExpression): R;
    visitDouble(arg0: DoubleExpression): Value;
    visitExecutionScope<R extends Object | number | string | boolean>(arg0: ExecutionScopeExpression): R;
    visitExecutionScope(arg0: ExecutionScopeExpression): Value;
    visitIdentifier<R extends Object | number | string | boolean>(arg0: IdentifierExpression): R;
    visitIdentifier(arg0: IdentifierExpression): Value;
    visitStatement<R extends Object | number | string | boolean>(arg0: StatementExpression): R;
    visitStatement(arg0: StatementExpression): Value;
    visitString<R extends Object | number | string | boolean>(arg0: StringExpression): R;
    visitString(arg0: StringExpression): Value;
    visitTernaryConditional<R extends Object | number | string | boolean>(arg0: TernaryConditionalExpression): R;
    visitTernaryConditional(arg0: TernaryConditionalExpression): Value;
    visitUnary<R extends Object | number | string | boolean>(arg0: UnaryExpression): R;
    visitUnary(arg0: UnaryExpression): Value;
    warnOnReflectiveFunctionUsage(arg0: boolean): void;
}