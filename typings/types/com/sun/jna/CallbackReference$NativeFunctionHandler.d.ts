import type { Function } from '../../../com/sun/jna/Function.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { InvocationHandler } from '../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CallbackReference$NativeFunctionHandler extends Object implements InvocationHandler {
    static invokeDefault(paramarg0: Object, paramarg1: Method, ...paramarg2: (Object | null)[]): Object;
    constructor(arg0: Pointer, arg1: number, arg2: { [key: string]: Object | null })
    // private function: Function;
    // private options: { [key: string]: Object | null };
    getPointer(): Pointer;
    invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
}