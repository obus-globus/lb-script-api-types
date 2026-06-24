import type { Callback } from '../../../com/sun/jna/Callback.d.ts'
import type { CallbackProxy } from '../../../com/sun/jna/CallbackProxy.d.ts'
import type { CallbackReference } from '../../../com/sun/jna/CallbackReference.d.ts'
import type { FromNativeConverter } from '../../../com/sun/jna/FromNativeConverter.d.ts'
import type { ToNativeConverter } from '../../../com/sun/jna/ToNativeConverter.d.ts'
import type { TypeMapper } from '../../../com/sun/jna/TypeMapper.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CallbackReference$DefaultCallbackProxy extends Object implements CallbackProxy {
    static FORBIDDEN_NAMES: string[];
    static METHOD_NAME: string;
    constructor(null_: CallbackReference, arg1: Method, arg2: TypeMapper, arg3: string)
    // private callbackMethod: Method;
    // private encoding: string;
    // private fromNative: FromNativeConverter[];
    // private toNative: ToNativeConverter;
    callback(arg0: Object[]): Object;
    // private convertArgument(arg0: Object, arg1: Class<Object>): Object;
    // private convertResult(arg0: Object): Object;
    getCallback(): Callback;
    getParameterTypes(): Class<Object>[];
    getReturnType(): Class<Object>;
    // private invokeCallback(arg0: Object[]): Object;
}