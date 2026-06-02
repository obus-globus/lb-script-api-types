import type { Function } from '../../../com/sun/jna/Function.d.ts'
import type { FunctionResultContext } from '../../../com/sun/jna/FunctionResultContext.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MethodResultContext extends FunctionResultContext {
    constructor(arg0: Class<Object>, arg1: Function, arg2: Object[], arg3: Method)
    readonly method: Method;
    getMethod(): Method;
}