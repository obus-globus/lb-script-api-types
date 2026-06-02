import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { JavaClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaClassFinder.d.ts'
import type { LazyJavaPackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaPackageFragmentProvider.d.ts'
import type { ModuleClassResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/ModuleClassResolver.d.ts'
import type { JavaSourceElementFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElementFactory.d.ts'
import type { DeserializationComponentsForJava } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializationComponentsForJava.d.ts'
import type { DeserializedDescriptorResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializedDescriptorResolver.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { PackagePartProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/PackagePartProvider.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { ErrorReporter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class DeserializationComponentsForJavaKt extends Object {
    static makeDeserializationComponentsForJava(paramarg0: ModuleDescriptor, paramarg1: StorageManager, paramarg2: NotFoundClasses, paramarg3: LazyJavaPackageFragmentProvider, paramarg4: KotlinClassFinder, paramarg5: DeserializedDescriptorResolver, paramarg6: ErrorReporter, paramarg7: MetadataVersion): DeserializationComponentsForJava;
    static makeLazyJavaPackageFragmentProvider(paramarg0: JavaClassFinder, paramarg1: ModuleDescriptor, paramarg2: StorageManager, paramarg3: NotFoundClasses, paramarg4: KotlinClassFinder, paramarg5: DeserializedDescriptorResolver, paramarg6: ErrorReporter, paramarg7: JavaSourceElementFactory, paramarg8: ModuleClassResolver, paramarg9: PackagePartProvider): LazyJavaPackageFragmentProvider;
}