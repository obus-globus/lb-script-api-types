import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectKotlinClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/ReflectKotlinClass.d.ts'
import type { ReflectKotlinClassFinder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/ReflectKotlinClassFinder.d.ts'
import type { DeserializedDescriptorResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializedDescriptorResolver.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { MemberScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export class PackagePartScopeCache extends Object {
    constructor(arg0: DeserializedDescriptorResolver, arg1: ReflectKotlinClassFinder)
    // private cache: JavaMap<ClassId, MemberScope>;
    // private kotlinClassFinder: ReflectKotlinClassFinder;
    // private resolver: DeserializedDescriptorResolver;
    getPackagePartScope(arg0: ReflectKotlinClass): MemberScope;
}