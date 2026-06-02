import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { NativeMapped } from '../../../com/sun/jna/NativeMapped.d.ts'
import type { ToNativeContext } from '../../../com/sun/jna/ToNativeContext.d.ts'
import type { TypeConverter } from '../../../com/sun/jna/TypeConverter.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NativeMappedConverter extends Object implements TypeConverter {
    static getInstance(paramarg0: Class<Object>): NativeMappedConverter;
    constructor(arg0: Class<Object>)
    // private instance: NativeMapped;
    // private nativeType: Class<Object>;
    // private type: Class<Object>;
    defaultValue(): NativeMapped;
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    nativeType(): Class<Object>;
    toNative(arg0: Object, arg1: ToNativeContext): Object;
}