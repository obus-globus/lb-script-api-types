import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AccessExpression } from '../../../../../team/unnamed/mocha/parser/ast/AccessExpression.d.ts'
import type { ArrayAccessExpression } from '../../../../../team/unnamed/mocha/parser/ast/ArrayAccessExpression.d.ts'
import type { BinaryExpression } from '../../../../../team/unnamed/mocha/parser/ast/BinaryExpression.d.ts'
import type { CallExpression } from '../../../../../team/unnamed/mocha/parser/ast/CallExpression.d.ts'
import type { DoubleExpression } from '../../../../../team/unnamed/mocha/parser/ast/DoubleExpression.d.ts'
import type { ExecutionScopeExpression } from '../../../../../team/unnamed/mocha/parser/ast/ExecutionScopeExpression.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { IdentifierExpression } from '../../../../../team/unnamed/mocha/parser/ast/IdentifierExpression.d.ts'
import type { StatementExpression } from '../../../../../team/unnamed/mocha/parser/ast/StatementExpression.d.ts'
import type { StringExpression } from '../../../../../team/unnamed/mocha/parser/ast/StringExpression.d.ts'
import type { TernaryConditionalExpression } from '../../../../../team/unnamed/mocha/parser/ast/TernaryConditionalExpression.d.ts'
import type { UnaryExpression } from '../../../../../team/unnamed/mocha/parser/ast/UnaryExpression.d.ts'
export interface ExpressionVisitor<R extends Object | number | string | boolean> extends Object{
    visit(arg0: Expression): R;
    visitAccess(arg0: AccessExpression): R;
    visitArrayAccess(arg0: ArrayAccessExpression): R;
    visitBinary(arg0: BinaryExpression): R;
    visitCall(arg0: CallExpression): R;
    visitDouble(arg0: DoubleExpression): R;
    visitExecutionScope(arg0: ExecutionScopeExpression): R;
    visitIdentifier(arg0: IdentifierExpression): R;
    visitStatement(arg0: StatementExpression): R;
    visitString(arg0: StringExpression): R;
    visitTernaryConditional(arg0: TernaryConditionalExpression): R;
    visitUnary(arg0: UnaryExpression): R;
}