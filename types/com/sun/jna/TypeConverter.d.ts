import type { FromNativeConverter } from '../../../com/sun/jna/FromNativeConverter.d.ts'
import type { ToNativeConverter } from '../../../com/sun/jna/ToNativeConverter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeConverter extends FromNativeConverter, ToNativeConverter, Object{
}