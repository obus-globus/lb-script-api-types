import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
export interface Expression extends Object{
    evaluateTo(arg0: FunctionContext, arg1: FunctionReturn): void;
    listVariables(arg0: E[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}