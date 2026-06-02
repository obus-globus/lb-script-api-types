import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { LookupTracker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupTracker.d.ts'
import type { LazyJavaPackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaPackageFragmentProvider.d.ts'
import type { BinaryClassAnnotationAndConstantLoaderImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/BinaryClassAnnotationAndConstantLoaderImpl.d.ts'
import type { DeserializationComponentsForJava$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializationComponentsForJava$Companion.d.ts'
import type { JavaClassDataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JavaClassDataFinder.d.ts'
import type { ContractDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ContractDeserializer.d.ts'
import type { DeserializationComponents } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
import type { DeserializationConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationConfiguration.d.ts'
import type { ErrorReporter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { NewKotlinTypeChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewKotlinTypeChecker.d.ts'
import type { TypeAttributeTranslators } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/extensions/TypeAttributeTranslators.d.ts'
export class DeserializationComponentsForJava extends Object {
    static Companion: DeserializationComponentsForJava$Companion;
    constructor(arg0: StorageManager, arg1: ModuleDescriptor, arg2: DeserializationConfiguration, arg3: JavaClassDataFinder, arg4: BinaryClassAnnotationAndConstantLoaderImpl, arg5: LazyJavaPackageFragmentProvider, arg6: NotFoundClasses, arg7: ErrorReporter, arg8: LookupTracker, arg9: ContractDeserializer, arg10: NewKotlinTypeChecker, arg11: TypeAttributeTranslators)
    readonly components: DeserializationComponents;
    getComponents(): DeserializationComponents;
}