import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExpressionInterpreter$LazyEvaluableBoolean } from '../../../../team/unnamed/mocha/runtime/ExpressionInterpreter$LazyEvaluableBoolean.d.ts'
export interface ExpressionInterpreter$BooleanOperator extends Object{
    operate(arg0: ExpressionInterpreter$LazyEvaluableBoolean, arg1: ExpressionInterpreter$LazyEvaluableBoolean): boolean;
}