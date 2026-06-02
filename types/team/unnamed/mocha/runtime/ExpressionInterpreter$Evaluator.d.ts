import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { ExpressionInterpreter } from '../../../../team/unnamed/mocha/runtime/ExpressionInterpreter.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export interface ExpressionInterpreter$Evaluator extends Object{
    eval(arg0: ExpressionInterpreter<Object>, arg1: Expression, arg2: Expression): Value;
}