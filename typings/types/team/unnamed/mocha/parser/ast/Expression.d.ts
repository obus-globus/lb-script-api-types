import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExpressionVisitor } from '../../../../../team/unnamed/mocha/parser/ast/ExpressionVisitor.d.ts'
export interface Expression extends Object{
    visit<R extends Object | number | string | boolean>(arg0: ExpressionVisitor<R>): R;
}