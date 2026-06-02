import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { SamConversionResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/sam/SamConversionResolver.d.ts'
import type { CacheWithNullableValues } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNullableValues.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class SamConversionResolverImpl extends Object implements SamConversionResolver {
    constructor(arg0: StorageManager, arg1: (Object | null)[])
    // private functionTypesForSamInterfaces: CacheWithNullableValues<ClassDescriptor, SimpleType>;
    // private samWithReceiverResolvers: Object[];
}