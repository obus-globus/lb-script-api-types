import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
export class KClasses extends Object {
    static cast(paramarg0: KClass<Object>, paramarg1: Object): Object | null;
    static safeCast(paramarg0: KClass<Object>, paramarg1: Object): Object | null;
}