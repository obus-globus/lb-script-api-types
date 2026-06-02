import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExpressionInterpreter$LazyEvaluableDouble } from '../../../../team/unnamed/mocha/runtime/ExpressionInterpreter$LazyEvaluableDouble.d.ts'
export interface ExpressionInterpreter$ArithmeticOperator extends Object{
    operate(arg0: ExpressionInterpreter$LazyEvaluableDouble, arg1: ExpressionInterpreter$LazyEvaluableDouble): number;
}