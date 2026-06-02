import type { Object } from '../../../java/lang/Object.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
export class BasicFunctionContext extends Object implements FunctionContext {
    constructor()
    // private variables: { [key: string]: Expression };
    getVariable(arg0: string): Expression;
    hasVariable(arg0: string): boolean;
    setFloatVariable(arg0: string, arg1: number): void;
    setIntVariable(arg0: string, arg1: number): void;
    setVariable(arg0: string, arg1: Expression): void;
}