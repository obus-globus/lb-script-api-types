import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface NativeMapped extends Object{
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    nativeType(): Class<Object>;
    toNative(): Object;
}