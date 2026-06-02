import type { ToNativeContext } from '../../../com/sun/jna/ToNativeContext.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToNativeConverter extends Object{
    nativeType(): Class<Object>;
    toNative(arg0: Object, arg1: ToNativeContext): Object;
}