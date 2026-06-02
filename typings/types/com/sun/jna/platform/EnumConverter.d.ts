import type { FromNativeContext } from '../../../../com/sun/jna/FromNativeContext.d.ts'
import type { ToNativeContext } from '../../../../com/sun/jna/ToNativeContext.d.ts'
import type { TypeConverter } from '../../../../com/sun/jna/TypeConverter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EnumConverter<T extends Enum<T>> extends Object implements TypeConverter {
    constructor(arg0: Class<T>)
    // private clazz: Class<T>;
    fromNative(arg0: Object, arg1: FromNativeContext): T;
    nativeType(): Class<number>;
    toNative(arg0: Object, arg1: ToNativeContext): number;
}