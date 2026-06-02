import type { SoftReference } from '../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { ReflectProperties$Val } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$Val.d.ts'
export class ReflectProperties$LazySoftVal<T extends Object | number | string | boolean> extends ReflectProperties$Val<T> implements Function0<T> {
    constructor(arg0: T, arg1: Function0<T>)
    // private initializer: () => T;
    // private value: SoftReference<Object>;
    invoke(): T;
}