import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export interface SerializerCache<T extends unknown> extends Object{
    get(key: KClass<Object>): KSerializer<T> | null;
    isStored(key: KClass<Object>): boolean;
}