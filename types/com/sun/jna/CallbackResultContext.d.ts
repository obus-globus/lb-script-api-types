import type { ToNativeContext } from '../../../com/sun/jna/ToNativeContext.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
export class CallbackResultContext extends ToNativeContext {
    constructor(arg0: Method)
    readonly method: Method;
    getMethod(): Method;
}