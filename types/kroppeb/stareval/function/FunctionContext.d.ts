import type { Object } from '../../../java/lang/Object.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
export interface FunctionContext extends Object{
    getVariable(arg0: string): Expression;
    hasVariable(arg0: string): boolean;
}