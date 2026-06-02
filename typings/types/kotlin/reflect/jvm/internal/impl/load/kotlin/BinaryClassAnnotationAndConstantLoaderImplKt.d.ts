import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { BinaryClassAnnotationAndConstantLoaderImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/BinaryClassAnnotationAndConstantLoaderImpl.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class BinaryClassAnnotationAndConstantLoaderImplKt extends Object {
    static createBinaryClassAnnotationAndConstantLoader(paramarg0: ModuleDescriptor, paramarg1: NotFoundClasses, paramarg2: StorageManager, paramarg3: KotlinClassFinder, paramarg4: MetadataVersion): BinaryClassAnnotationAndConstantLoaderImpl;
}