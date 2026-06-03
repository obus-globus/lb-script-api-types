import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BuiltInsLoader } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/BuiltInsLoader.d.ts'
import type { BuiltInsLoader$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/BuiltInsLoader$Companion.d.ts'
import type { ModuleDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentProvider } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { ClassDescriptorFactory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/ClassDescriptorFactory.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { BuiltInsResourceLoader } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/builtins/BuiltInsResourceLoader.d.ts'
import type { StorageManager } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class BuiltInsLoaderImpl extends Object implements BuiltInsLoader {
    static Companion: BuiltInsLoader$Companion;
    constructor()
    // private resourceLoader: BuiltInsResourceLoader;
    createBuiltInPackageFragmentProvider(arg0: StorageManager, arg1: ModuleDescriptor, arg2: FqName[], arg3: ClassDescriptorFactory[], arg4: PlatformDependentDeclarationFilter, arg5: AdditionalClassPartsProvider, arg6: boolean, arg7: (param0: string) => InputStream): PackageFragmentProvider;
    createPackageFragmentProvider(arg0: StorageManager, arg1: ModuleDescriptor, arg2: ClassDescriptorFactory[], arg3: PlatformDependentDeclarationFilter, arg4: AdditionalClassPartsProvider, arg5: boolean): PackageFragmentProvider;
}