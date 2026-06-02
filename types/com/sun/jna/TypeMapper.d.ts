import type { FromNativeConverter } from '../../../com/sun/jna/FromNativeConverter.d.ts'
import type { ToNativeConverter } from '../../../com/sun/jna/ToNativeConverter.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeMapper extends Object{
    getFromNativeConverter(arg0: Class<Object>): FromNativeConverter;
    getToNativeConverter(arg0: Class<Object>): ToNativeConverter;
}