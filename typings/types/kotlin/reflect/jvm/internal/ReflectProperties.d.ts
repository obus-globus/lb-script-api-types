import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
export class ReflectProperties extends Object {
    static lazySoft<T extends unknown>(paramarg0: T, paramarg1: () => T): ReflectProperties$LazySoftVal<T>;
    static lazySoft<T extends unknown>(paramarg0: () => T): ReflectProperties$LazySoftVal<T>;
}