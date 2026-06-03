import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
export class ReflectProperties extends Object {
    static lazySoft(paramarg0: Object | null, paramarg1: () => Object | null): ReflectProperties$LazySoftVal<Object>;
    static lazySoft(paramarg0: () => Object | null): ReflectProperties$LazySoftVal<Object>;
}