import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CallbackParameterContext extends FromNativeContext {
    constructor(arg0: Class<Object>, arg1: Method, arg2: Object[], arg3: number)
    // private args: Object[];
    readonly index: number;
    readonly method: Method;
    getArguments(): Object[];
    getIndex(): number;
    getMethod(): Method;
}