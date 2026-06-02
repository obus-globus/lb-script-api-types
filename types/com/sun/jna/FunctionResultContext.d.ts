import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { Function } from '../../../com/sun/jna/Function.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FunctionResultContext extends FromNativeContext {
    constructor(arg0: Class<Object>, arg1: Function, arg2: Object[])
    // private args: Object[];
    readonly function: Function;
    getArguments(): Object[];
    getFunction(): Function;
}