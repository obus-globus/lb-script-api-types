import type { Object } from '../../../java/lang/Object.d.ts'
import type { Result } from '../../../kotlin/Result.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export interface ParametrizedSerializerCache<T extends Object | number | string | boolean> extends Object{
    get(key: KClass<Object>, types: KType[]): Result<KSerializer<T>>;
}