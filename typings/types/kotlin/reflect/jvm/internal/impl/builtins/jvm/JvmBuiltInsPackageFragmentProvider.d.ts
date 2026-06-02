import type { JvmBuiltInsPackageFragmentProvider$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JvmBuiltInsPackageFragmentProvider$Companion.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { SamConversionResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/sam/SamConversionResolver.d.ts'
import type { AbstractDeserializedPackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AbstractDeserializedPackageFragmentProvider.d.ts'
import type { DeserializationConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationConfiguration.d.ts'
import type { DeserializedPackageFragment } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializedPackageFragment.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { NewKotlinTypeChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewKotlinTypeChecker.d.ts'
export class JvmBuiltInsPackageFragmentProvider extends AbstractDeserializedPackageFragmentProvider {
    static Companion: JvmBuiltInsPackageFragmentProvider$Companion;
    constructor(arg0: StorageManager, arg1: KotlinClassFinder, arg2: ModuleDescriptor, arg3: NotFoundClasses, arg4: AdditionalClassPartsProvider, arg5: PlatformDependentDeclarationFilter, arg6: DeserializationConfiguration, arg7: NewKotlinTypeChecker, arg8: SamConversionResolver)
    findPackage(arg0: FqName): DeserializedPackageFragment;
}