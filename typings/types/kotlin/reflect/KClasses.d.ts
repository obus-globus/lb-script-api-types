import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
export class KClasses extends Object {
    static cast<T extends unknown>(self: KClass<T>, value: Object | null): T;
    static safeCast<T extends unknown>(self: KClass<T>, value: Object | null): T | null;
}