import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractBinaryClassAnnotationAndConstantLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationAndConstantLoader.d.ts'
import type { AbstractBinaryClassAnnotationLoader$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader$Companion.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { AnnotationDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationDeserializer.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class BinaryClassAnnotationAndConstantLoaderImpl extends AbstractBinaryClassAnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<Object>> {
    static Companion: AbstractBinaryClassAnnotationLoader$Companion;
    constructor(arg0: ModuleDescriptor, arg1: NotFoundClasses, arg2: StorageManager, arg3: KotlinClassFinder)
    // private annotationDeserializer: AnnotationDeserializer;
    readonly metadataVersion: MetadataVersion;
    // private module: ModuleDescriptor;
    // private notFoundClasses: NotFoundClasses;
    // private createConstant(arg0: Name, arg1: Object): ConstantValue<Object>;
    getMetadataVersion(): MetadataVersion;
    loadAnnotation(arg0: ProtoBuf$Annotation, arg1: NameResolver): AnnotationDescriptor;
    loadAnnotation(arg0: ClassId, arg1: SourceElement, arg2: AnnotationDescriptor[]): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    loadConstant(arg0: string, arg1: Object): ConstantValue<Object>;
    // private resolveClass(arg0: ClassId): ClassDescriptor;
    setMetadataVersion(arg0: MetadataVersion): void;
    transformToUnsignedConstant(arg0: ConstantValue<Object>): ConstantValue<Object>;
}