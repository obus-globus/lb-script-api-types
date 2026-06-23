import type { User32Util$MessageLoopThread } from '../../../../../com/sun/jna/platform/win32/User32Util$MessageLoopThread.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { InvocationHandler } from '../../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DdemlUtil$MessageLoopWrapper extends Object implements InvocationHandler {
    static invokeDefault(paramarg0: Object, paramarg1: Method, paramarg2: (Object | null)[]): Object;
    constructor(arg0: User32Util$MessageLoopThread, arg1: Object)
    // private delegate: Object;
    // private loopThread: User32Util$MessageLoopThread;
    invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
    // private wrap<V extends unknown>(arg0: V, arg1: Class<Object>): V;
}