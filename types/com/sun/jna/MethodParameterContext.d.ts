import type { Function } from '../../../com/sun/jna/Function.d.ts'
import type { FunctionParameterContext } from '../../../com/sun/jna/FunctionParameterContext.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MethodParameterContext extends FunctionParameterContext {
    constructor(arg0: Function, arg1: Object[], arg2: number, arg3: Method)
    readonly method: Method;
    getMethod(): Method;
}