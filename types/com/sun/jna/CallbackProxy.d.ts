import type { Callback } from '../../../com/sun/jna/Callback.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CallbackProxy extends Callback, Object{
    callback(arg0: Object[]): Object;
    getParameterTypes(): Class<Object>[];
    getReturnType(): Class<Object>;
}