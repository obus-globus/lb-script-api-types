import type { Object } from '../../../java/lang/Object.d.ts'
import type { Result } from '../../../kotlin/Result.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { KTypeWrapper } from '../../../kotlinx/serialization/internal/KTypeWrapper.d.ts'
export class ParametrizedCacheEntry<T extends Object | number | string | boolean> extends Object {
    constructor()
    // private serializers: Map<KTypeWrapper[], Result<KSerializer<T>>>;
    computeIfAbsent(types: KType[], producer: () => KSerializer<T> | null): Result<KSerializer<T>>;
}