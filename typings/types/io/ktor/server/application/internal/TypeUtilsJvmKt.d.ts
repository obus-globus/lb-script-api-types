import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
export class TypeUtilsJvmKt extends Object {
    static starProjectedTypeBridge<T extends unknown>(klass: KClass<T>): KType;
}