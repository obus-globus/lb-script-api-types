import type { Callback } from '../../../com/sun/jna/Callback.d.ts'
import type { CallbackProxy } from '../../../com/sun/jna/CallbackProxy.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { Cleaner$Cleanable } from '../../../com/sun/jna/internal/Cleaner$Cleanable.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CallbackReference extends WeakReference<Callback> implements Closeable {
    static getCallback(paramarg0: Class<Object>, paramarg1: Pointer): Callback;
    static getFunctionPointer(paramarg0: Callback): Pointer;
    static reachabilityFence(paramarg0: Object): void;
    private constructor(arg0: Callback, arg1: number, arg2: boolean)
    // private callingConvention: number;
    // private cbstruct: Pointer;
    // private cleanable: Cleaner$Cleanable;
    // private method: Method;
    // private proxy: CallbackProxy;
    trampoline: Pointer;
    close(): void;
    dispose(): void;
    // private getCallback(): Callback;
    // private getNativeType(arg0: Class<Object>): Class<Object>;
    getTrampoline(): Pointer;
    // private setCallbackOptions(arg0: number): void;
}