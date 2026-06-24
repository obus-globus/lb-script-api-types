import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ModuleDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackagePartScopeCache } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/PackagePartScopeCache.d.ts'
import type { RuntimeModuleData$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/RuntimeModuleData$Companion.d.ts'
import type { DeserializationComponents } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
export class RuntimeModuleData extends Object {
    static Companion: RuntimeModuleData$Companion;
    private constructor(arg0: DeserializationComponents, arg1: PackagePartScopeCache)
    constructor(arg0: DeserializationComponents, arg1: PackagePartScopeCache, arg2: DefaultConstructorMarker)
    readonly deserialization: DeserializationComponents;
    readonly packagePartScopeCache: PackagePartScopeCache;
    getDeserialization(): DeserializationComponents;
    getModule(): ModuleDescriptor;
    getPackagePartScopeCache(): PackagePartScopeCache;
}