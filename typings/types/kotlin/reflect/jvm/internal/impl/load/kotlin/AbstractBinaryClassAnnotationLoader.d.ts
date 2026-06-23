import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AbstractBinaryClassAnnotationLoader$AnnotationsContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader$AnnotationsContainer.d.ts'
import type { AbstractBinaryClassAnnotationLoader$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader$Companion.d.ts'
import type { AbstractBinaryClassAnnotationLoader$PropertyRelatedElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/AbstractBinaryClassAnnotationLoader$PropertyRelatedElement.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { MemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { MessageLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { AnnotatedCallableKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotatedCallableKind.d.ts'
import type { AnnotationLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationLoader.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
import type { ProtoContainer$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer$Class.d.ts'
export abstract class AbstractBinaryClassAnnotationLoader<A extends unknown, S extends AbstractBinaryClassAnnotationLoader$AnnotationsContainer<A>> extends Object implements AnnotationLoader<A> {
    static Companion: AbstractBinaryClassAnnotationLoader$Companion;
    constructor(arg0: KotlinClassFinder)
    // private kotlinClassFinder: KotlinClassFinder;
    // private computeJvmParameterIndexShift(arg0: ProtoContainer, arg1: MessageLite): number;
    // private findClassAndLoadMemberAnnotations(arg0: ProtoContainer, arg1: MemberSignature, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): A[];
    findClassWithAnnotationsAndInitializers(arg0: ProtoContainer, arg1: KotlinJvmBinaryClass): KotlinJvmBinaryClass;
    getAnnotationsContainer(arg0: KotlinJvmBinaryClass): S;
    getCachedFileContent(arg0: KotlinJvmBinaryClass): number[];
    getCallableSignature(arg0: MessageLite, arg1: NameResolver, arg2: TypeTable, arg3: AnnotatedCallableKind, arg4: boolean): MemberSignature;
    // private getContextParameterCount(arg0: MessageLite): number;
    getKotlinClassFinder(): KotlinClassFinder;
    getMetadataVersion(): MetadataVersion;
    isImplicitRepeatableContainer(arg0: ClassId): boolean;
    loadAnnotation(arg0: ProtoBuf$Annotation, arg1: NameResolver): A;
    loadAnnotation(arg0: ClassId, arg1: SourceElement, arg2: A[]): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    loadAnnotationIfNotSpecial(arg0: ClassId, arg1: SourceElement, arg2: A[]): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    loadCallableAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind): A[];
    loadClassAnnotations(arg0: ProtoContainer$Class): A[];
    loadContextParameterAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind, arg3: number, arg4: ProtoBuf$ValueParameter): A[];
    loadEnumEntryAnnotations(arg0: ProtoContainer, arg1: ProtoBuf$EnumEntry): A[];
    loadExtensionReceiverParameterAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind): A[];
    // private loadParameterAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind, arg3: number): A[];
    // private loadPropertyAnnotations(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: AbstractBinaryClassAnnotationLoader$PropertyRelatedElement): A[];
    loadPropertyBackingFieldAnnotations(arg0: ProtoContainer, arg1: ProtoBuf$Property): A[];
    loadPropertyDelegateFieldAnnotations(arg0: ProtoContainer, arg1: ProtoBuf$Property): A[];
    loadTypeAnnotations(arg0: ProtoBuf$Type, arg1: NameResolver): A[];
    loadTypeParameterAnnotations(arg0: ProtoBuf$TypeParameter, arg1: NameResolver): A[];
    loadValueParameterAnnotations(arg0: ProtoContainer, arg1: MessageLite, arg2: AnnotatedCallableKind, arg3: number, arg4: ProtoBuf$ValueParameter): A[];
    // private toBinaryClass(arg0: ProtoContainer$Class): KotlinJvmBinaryClass;
}