import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { FromNativeConverter } from '../../../com/sun/jna/FromNativeConverter.d.ts'
import type { ToNativeContext } from '../../../com/sun/jna/ToNativeContext.d.ts'
import type { ToNativeConverter } from '../../../com/sun/jna/ToNativeConverter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeConverter extends FromNativeConverter, ToNativeConverter, Object{
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    toNative(arg0: Object, arg1: ToNativeContext): Object;
}